import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Assignment from '@/models/Assignment';
import { getAuthUser } from '@/lib/auth';

// GET a single assignment
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;

    const assignment = await Assignment.findOne({ _id: id, userId: authUser.userId });
    if (!assignment) {
      return NextResponse.json(
        { success: false, message: 'Assignment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, assignment }, { status: 200 });
  } catch (error) {
    console.error('Get assignment error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT update an assignment
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;
    const body = await request.json();

    // If status is being changed to submitted, set submittedAt
    if (body.status === 'submitted') {
      body.submittedAt = new Date();
    }

    const assignment = await Assignment.findOneAndUpdate(
      { _id: id, userId: authUser.userId },
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!assignment) {
      return NextResponse.json(
        { success: false, message: 'Assignment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Assignment updated successfully', assignment },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update assignment error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE an assignment
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();
    const { id } = await params;

    const assignment = await Assignment.findOneAndDelete({ _id: id, userId: authUser.userId });
    if (!assignment) {
      return NextResponse.json(
        { success: false, message: 'Assignment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Assignment deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete assignment error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

