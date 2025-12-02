import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Task from '@/models/Task';
import Attendance from '@/models/Attendance';
import Note from '@/models/Note';
import Goal from '@/models/Goal';
import Assignment from '@/models/Assignment';
import { getAuthUser } from '@/lib/auth';

// GET dashboard statistics
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

    const userId = authUser.userId;

    // Get task statistics
    const totalTasks = await Task.countDocuments({ userId });
    const completedTasks = await Task.countDocuments({ userId, status: 'completed' });
    const pendingTasks = await Task.countDocuments({ userId, status: 'pending' });
    const inProgressTasks = await Task.countDocuments({ userId, status: 'in-progress' });

    // Get attendance statistics for current month
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

    const attendanceRecords = await Attendance.find({
      userId,
      date: { $gte: startOfMonth, $lte: endOfMonth },
    });

    const presentDays = attendanceRecords.filter(a => a.status === 'present').length;
    const absentDays = attendanceRecords.filter(a => a.status === 'absent').length;
    const lateDays = attendanceRecords.filter(a => a.status === 'late').length;
    const totalAttendance = attendanceRecords.length;
    const attendancePercentage = totalAttendance > 0 
      ? Math.round((presentDays / totalAttendance) * 100) 
      : 0;

    // Get notes count
    const totalNotes = await Note.countDocuments({ userId });

    // Get goals statistics
    const totalGoals = await Goal.countDocuments({ userId });
    const completedGoals = await Goal.countDocuments({ userId, status: 'completed' });
    const activeGoals = await Goal.countDocuments({ 
      userId, 
      status: { $in: ['not-started', 'in-progress'] } 
    });

    // Get assignments statistics
    const totalAssignments = await Assignment.countDocuments({ userId });
    const pendingAssignments = await Assignment.countDocuments({ userId, status: 'pending' });
    const submittedAssignments = await Assignment.countDocuments({ userId, status: 'submitted' });

    // Get recent activities
    const recentTasks = await Task.find({ userId })
      .sort({ updatedAt: -1 })
      .limit(5)
      .select('title status updatedAt');

    const recentGoals = await Goal.find({ userId })
      .sort({ updatedAt: -1 })
      .limit(3)
      .select('title status progress deadline');

    const upcomingDeadlines = await Goal.find({
      userId,
      status: { $in: ['not-started', 'in-progress'] },
      deadline: { $gte: now },
    })
      .sort({ deadline: 1 })
      .limit(5)
      .select('title deadline');

    return NextResponse.json({
      success: true,
      stats: {
        tasks: {
          total: totalTasks,
          completed: completedTasks,
          pending: pendingTasks,
          inProgress: inProgressTasks,
        },
        attendance: {
          total: totalAttendance,
          present: presentDays,
          absent: absentDays,
          late: lateDays,
          percentage: attendancePercentage,
        },
        notes: {
          total: totalNotes,
        },
        goals: {
          total: totalGoals,
          completed: completedGoals,
          active: activeGoals,
        },
        assignments: {
          total: totalAssignments,
          pending: pendingAssignments,
          submitted: submittedAssignments,
        },
      },
      recent: {
        tasks: recentTasks,
        goals: recentGoals,
        upcomingDeadlines,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Dashboard error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

