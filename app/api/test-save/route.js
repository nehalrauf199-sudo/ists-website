import { NextResponse } from 'next/server';
import clientPromise from '@/app/lib/mongodb';

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('ists');

        // Test save
        const testRegistration = {
            name: 'Test User',
            email: 'test@example.com',
            phone: '1234567890',
            course: 'Test Course',
            registeredAt: new Date()
        };

        const result = await db.collection('registrations').insertOne(testRegistration);

        return NextResponse.json({
            success: true,
            message: 'Test registration saved!',
            id: result.insertedId
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({
            success: false,
            error: error.message
        }, { status: 500 });
    }
}