import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';
import { put } from '@vercel/blob';

function generateSlug(name) {
    return name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
}

// Simple in‑memory cache for the courses list
let cachedCourses = null;
let cacheTimestamp = 0;
const CACHE_TTL = 60000; // 60 seconds

export async function GET() {
    try {
        const now = Date.now();
        // Serve cached version if still fresh
        if (cachedCourses && (now - cacheTimestamp) < CACHE_TTL) {
            return NextResponse.json(cachedCourses);
        }

        const client = await clientPromise;
        const db = client.db('ists');
        // Only fetch fields needed for the admin table – this reduces data transfer from ~500KB to ~5KB
        const courses = await db.collection('courses')
            .find({}, { projection: { name: 1, category: 1, hours: 1 } })
            .toArray();

        // Update cache
        cachedCourses = courses;
        cacheTimestamp = now;

        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
        const client = await clientPromise;
        const db = client.db('ists');
        await db.collection('courses').deleteOne({ _id: new ObjectId(id) });
        // Invalidate cache after deletion
        cachedCourses = null;
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        const body = {};
        let featuredImageUrl = null;

        for (const [key, value] of formData.entries()) {
            if (key === 'featuredImage' && value instanceof File && value.size > 0) {
                const blob = await put(`courses/${Date.now()}-${value.name}`, value, { access: 'public' });
                featuredImageUrl = blob.url;
            } else if (key === 'sections' || key === 'faqs') {
                body[key] = JSON.parse(value);
            } else if (key === 'content' || key === 'outcomes' || key === 'modules' || key === 'learningObjectives') {
                body[key] = value.split('\n').filter(item => item.trim());
            } else {
                body[key] = value;
            }
        }

        const client = await clientPromise;
        const db = client.db('ists');
        const slug = generateSlug(body.name);

        const newCourse = {
            name: body.name || '',
            category: body.category || '',
            hours: body.hours || '',
            description: body.description || '',
            content: body.content || [],
            outcomes: body.outcomes || [],
            eligibility: body.eligibility || '',
            modules: body.modules || [],
            learningObjectives: body.learningObjectives || [],
            sections: body.sections || [],
            faqs: body.faqs || [],
            seoTitle: body.seoTitle || '',
            metaDescription: body.metaDescription || '',
            focusKeyword: body.focusKeyword || '',
            featuredImage: featuredImageUrl,
            slug,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        const result = await db.collection('courses').insertOne(newCourse);
        // Invalidate cache after insert
        cachedCourses = null;
        return NextResponse.json({ success: true, id: result.insertedId });
    } catch (error) {
        console.error('POST error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const formData = await req.formData();
        const id = formData.get('id');
        if (!id) return NextResponse.json({ error: 'No ID provided' }, { status: 400 });

        const updateData = {};
        let featuredImageUrl = null;

        for (const [key, value] of formData.entries()) {
            if (key === 'featuredImage' && value instanceof File && value.size > 0) {
                const blob = await put(`courses/${Date.now()}-${value.name}`, value, { access: 'public' });
                featuredImageUrl = blob.url;
            } else if (key === 'sections' || key === 'faqs') {
                updateData[key] = JSON.parse(value);
            } else if (key === 'content' || key === 'outcomes' || key === 'modules' || key === 'learningObjectives') {
                updateData[key] = value.split('\n').filter(item => item.trim());
            } else if (key !== 'id') {
                updateData[key] = value;
            }
        }

        if (featuredImageUrl) updateData.featuredImage = featuredImageUrl;
        if (updateData.name) updateData.slug = generateSlug(updateData.name);
        updateData.updatedAt = new Date();

        const client = await clientPromise;
        const db = client.db('ists');
        await db.collection('courses').updateOne(
            { _id: new ObjectId(id) },
            { $set: updateData }
        );
        // Invalidate cache after update
        cachedCourses = null;
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('PUT error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}