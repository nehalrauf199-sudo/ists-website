// app/api/admin/settings/route.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');
        const settings = await db.collection('settings').findOne({ _id: 'site_settings' });

        return new Response(JSON.stringify(settings || {}), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching settings:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch settings' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function PUT(request) {
    try {
        const client = await clientPromise;
        const db = client.db('ists');
        const body = await request.json();

        // Remove _id if present to avoid conflicts
        delete body._id;

        const result = await db.collection('settings').updateOne(
            { _id: 'site_settings' },
            { $set: body },
            { upsert: true }
        );

        const updated = await db.collection('settings').findOne({ _id: 'site_settings' });

        return new Response(JSON.stringify(updated), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error updating settings:', error);
        return new Response(JSON.stringify({ error: 'Failed to update settings' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}