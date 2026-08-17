import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import Registration from '@/models/Registration';

// GET - Fetch all registrations
export async function GET() {
    try {
        await connectDB();
        const registrations = await Registration.find({}).sort({ createdAt: -1 });
        return NextResponse.json(registrations);
    } catch (error) {
        console.error('Error fetching registrations:', error);
        return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 });
    }
}

// DELETE - Delete a registration
export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID required' }, { status: 400 });
        }

        await connectDB();
        await Registration.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Registration deleted successfully' });
    } catch (error) {
        console.error('Error deleting registration:', error);
        return NextResponse.json({ error: 'Failed to delete registration' }, { status: 500 });
    }
}