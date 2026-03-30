import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

export async function GET() {
    try {
        const client = new MongoClient('mongodb://localhost:27017');
        await client.connect();
        const db = client.db('ists');
        const result = await db.command({ ping: 1 });
        await client.close();

        return NextResponse.json({
            success: true,
            message: 'MongoDB is connected and working!'
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}