import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Note from '@/models/Note';
import { getAuthUser } from '@/lib/auth';

// GET all notes for the authenticated user
export async function GET() {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();

    const notes = await Note.find({ userId: authUser.userId })
      .sort({ isPinned: -1, updatedAt: -1 });

    return NextResponse.json({ success: true, notes }, { status: 200 });
  } catch (error) {
    console.error('Get notes error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST create a new note
export async function POST(request: NextRequest) {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();

    const body = await request.json();
    const { title, content, category, tags, isPinned } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: 'Title and content are required' },
        { status: 400 }
      );
    }

    const note = await Note.create({
      userId: authUser.userId,
      title,
      content,
      category,
      tags: tags || [],
      isPinned: isPinned || false,
    });

    return NextResponse.json(
      { success: true, message: 'Note created successfully', note },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create note error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

