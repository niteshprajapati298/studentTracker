import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Assignment from '@/models/Assignment';
import { getAuthUser } from '@/lib/auth';

// GET all assignments for the authenticated user
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

    const assignments = await Assignment.find({ userId: authUser.userId })
      .sort({ createdAt: -1 });

    return NextResponse.json({ success: true, assignments }, { status: 200 });
  } catch (error) {
    console.error('Get assignments error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST create a new assignment
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
    const { title, description, fileUrl, fileName, fileType, subject, dueDate, status } = body;

    if (!title) {
      return NextResponse.json(
        { success: false, message: 'Title is required' },
        { status: 400 }
      );
    }

    const assignment = await Assignment.create({
      userId: authUser.userId,
      title,
      description,
      fileUrl,
      fileName,
      fileType,
      subject,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      status: status || 'pending',
      submittedAt: status === 'submitted' ? new Date() : undefined,
    });

    return NextResponse.json(
      { success: true, message: 'Assignment created successfully', assignment },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create assignment error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

