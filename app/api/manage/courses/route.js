import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');
        const courses = await db.collection('courses').find({}).toArray();
        return NextResponse.json(courses);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('ists');

        const result = await db.collection('courses').deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db('ists');

        // Build new course document with all possible fields
        const newCourse = {
            // Basic fields (existing)
            name: body.name || '',
            category: body.category || '',
            hours: body.hours || '',
            description: body.description || '',
            content: body.content || [],
            outcomes: body.outcomes || [],
            eligibility: body.eligibility || '',
            modules: body.modules || [],
            learningObjectives: body.learningObjectives || [],

            // New dynamic fields
            sections: body.sections || [],        // array of { heading, description }
            faqs: body.faqs || [],                // array of { question, answer }
            seoTitle: body.seoTitle || '',
            metaDescription: body.metaDescription || '',
            focusKeyword: body.focusKeyword || '',
            featuredImage: body.featuredImagePreview || null, // store the base64 preview or URL

            // Metadata
            createdAt: new Date(),
            updatedAt: new Date()
        };

        const result = await db.collection('courses').insertOne(newCourse);
        return NextResponse.json({ success: true, id: result.insertedId });
    } catch (error) {
        console.error('POST error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, ...updateData } = body;

        if (!id) {
            return NextResponse.json({ error: 'No ID provided' }, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db('ists');

        // Prepare update object – include all fields that may be present
        const updateFields = {
            // Basic fields
            name: updateData.name,
            category: updateData.category,
            hours: updateData.hours,
            description: updateData.description,
            content: updateData.content,
            outcomes: updateData.outcomes,
            eligibility: updateData.eligibility,
            modules: updateData.modules,
            learningObjectives: updateData.learningObjectives,

            // New dynamic fields
            sections: updateData.sections,
            faqs: updateData.faqs,
            seoTitle: updateData.seoTitle,
            metaDescription: updateData.metaDescription,
            focusKeyword: updateData.focusKeyword,
            featuredImage: updateData.featuredImagePreview || updateData.featuredImage,

            updatedAt: new Date()
        };

        // Remove undefined fields to avoid overwriting with undefined
        Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

        await db.collection('courses').updateOne(
            { _id: new ObjectId(id) },
            { $set: updateFields }
        );

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('PUT error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}