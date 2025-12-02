import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Attendance from '@/models/Attendance';
import { getAuthUser } from '@/lib/auth';

// GET all attendance records for the authenticated user
export async function GET(request: NextRequest) {
  try {
    const authUser = await getAuthUser();
    if (!authUser) {
      return NextResponse.json(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const month = searchParams.get('month');
    const year = searchParams.get('year');

    let query: Record<string, unknown> = { userId: authUser.userId };

    if (month && year) {
      const startDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      const endDate = new Date(parseInt(year), parseInt(month), 0);
      query = {
        ...query,
        date: { $gte: startDate, $lte: endDate },
      };
    }

    const attendance = await Attendance.find(query).sort({ date: -1 });

    return NextResponse.json(
      { success: true, attendance },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get attendance error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST mark attendance
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
    const { date, status, subject, notes } = body;

    if (!date || !status) {
      return NextResponse.json(
        { success: false, message: 'Date and status are required' },
        { status: 400 }
      );
    }

    // Check if attendance already exists for this date and subject
    const existingAttendance = await Attendance.findOne({
      userId: authUser.userId,
      date: new Date(date),
      subject: subject || null,
    });

    if (existingAttendance) {
      // Update existing attendance
      existingAttendance.status = status;
      existingAttendance.notes = notes;
      await existingAttendance.save();

      return NextResponse.json(
        { success: true, message: 'Attendance updated successfully', attendance: existingAttendance },
        { status: 200 }
      );
    }

    const attendance = await Attendance.create({
      userId: authUser.userId,
      date: new Date(date),
      status,
      subject,
      notes,
    });

    return NextResponse.json(
      { success: true, message: 'Attendance marked successfully', attendance },
      { status: 201 }
    );
  } catch (error) {
    console.error('Mark attendance error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

