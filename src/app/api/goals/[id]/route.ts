import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Goal from '@/models/Goal';
import { getAuthUser } from '@/lib/auth';

// GET a single goal
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

    const goal = await Goal.findOne({ _id: id, userId: authUser.userId });
    if (!goal) {
      return NextResponse.json(
        { success: false, message: 'Goal not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, goal }, { status: 200 });
  } catch (error) {
    console.error('Get goal error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT update a goal
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

    // If progress is 100, automatically set status to completed
    if (body.progress === 100 && !body.status) {
      body.status = 'completed';
    }

    const goal = await Goal.findOneAndUpdate(
      { _id: id, userId: authUser.userId },
      { ...body, updatedAt: new Date() },
      { new: true, runValidators: true }
    );

    if (!goal) {
      return NextResponse.json(
        { success: false, message: 'Goal not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Goal updated successfully', goal },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update goal error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE a goal
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

    const goal = await Goal.findOneAndDelete({ _id: id, userId: authUser.userId });
    if (!goal) {
      return NextResponse.json(
        { success: false, message: 'Goal not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Goal deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete goal error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

