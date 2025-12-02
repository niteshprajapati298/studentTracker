import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Goal from '@/models/Goal';
import { getAuthUser } from '@/lib/auth';

// GET all goals for the authenticated user
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

    const goals = await Goal.find({ userId: authUser.userId })
      .sort({ deadline: 1 });

    return NextResponse.json({ success: true, goals }, { status: 200 });
  } catch (error) {
    console.error('Get goals error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST create a new goal
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
    const { title, description, deadline, status, progress, category } = body;

    if (!title || !deadline) {
      return NextResponse.json(
        { success: false, message: 'Title and deadline are required' },
        { status: 400 }
      );
    }

    const goal = await Goal.create({
      userId: authUser.userId,
      title,
      description,
      deadline: new Date(deadline),
      status: status || 'not-started',
      progress: progress || 0,
      category,
    });

    return NextResponse.json(
      { success: true, message: 'Goal created successfully', goal },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create goal error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

