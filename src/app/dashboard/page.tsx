'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchDashboardData } from '@/store/slices/dashboardSlice';
import { Card, ProgressBar, Badge, PageLoader } from '@/components/ui';
import { 
  CheckSquare, 
  Calendar, 
  StickyNote, 
  Target, 
  FileText,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const { stats, recent, isLoading } = useAppSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (isLoading || !stats) {
    return <PageLoader />;
  }

  const statCards = [
    {
      title: 'Tasks',
      value: stats.tasks.total,
      subtitle: `${stats.tasks.completed} completed`,
      icon: CheckSquare,
      color: 'from-sky-500 to-blue-600',
      bgColor: 'from-sky-500/20 to-blue-500/10',
      href: '/dashboard/tasks',
    },
    {
      title: 'Attendance',
      value: `${stats.attendance.percentage}%`,
      subtitle: `${stats.attendance.present} days present`,
      icon: Calendar,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-500/20 to-teal-500/10',
      href: '/dashboard/attendance',
    },
    {
      title: 'Notes',
      value: stats.notes.total,
      subtitle: 'Total notes',
      icon: StickyNote,
      color: 'from-violet-500 to-purple-600',
      bgColor: 'from-violet-500/20 to-purple-500/10',
      href: '/dashboard/notes',
    },
    {
      title: 'Goals',
      value: stats.goals.total,
      subtitle: `${stats.goals.active} active`,
      icon: Target,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-500/20 to-orange-500/10',
      href: '/dashboard/goals',
    },
    {
      title: 'Assignments',
      value: stats.assignments.total,
      subtitle: `${stats.assignments.pending} pending`,
      icon: FileText,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-500/20 to-pink-500/10',
      href: '/dashboard/assignments',
    },
  ];

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-slate-400">Overview of your academic activities</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {statCards.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card hover className="h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ color: 'inherit' }} />
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-400">{stat.title}</p>
              <p className="text-xs text-slate-500 mt-1">{stat.subtitle}</p>
            </Card>
          </Link>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task Progress */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-white">Task Progress</h2>
              <p className="text-sm text-slate-400">Your task completion overview</p>
            </div>
            <Link href="/dashboard/tasks" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
              View all
            </Link>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Completed</span>
                <span className="text-sm font-medium text-emerald-400">{stats.tasks.completed}</span>
              </div>
              <ProgressBar 
                value={stats.tasks.completed} 
                max={stats.tasks.total || 1} 
                color="emerald" 
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">In Progress</span>
                <span className="text-sm font-medium text-sky-400">{stats.tasks.inProgress}</span>
              </div>
              <ProgressBar 
                value={stats.tasks.inProgress} 
                max={stats.tasks.total || 1} 
                color="sky" 
              />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">Pending</span>
                <span className="text-sm font-medium text-amber-400">{stats.tasks.pending}</span>
              </div>
              <ProgressBar 
                value={stats.tasks.pending} 
                max={stats.tasks.total || 1} 
                color="amber" 
              />
            </div>
          </div>
        </Card>

        {/* Attendance Overview */}
        <Card>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-white">Attendance</h2>
              <p className="text-sm text-slate-400">This month</p>
            </div>
            <Link href="/dashboard/attendance" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
              View all
            </Link>
          </div>

          <div className="flex items-center justify-center mb-6">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-slate-700"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${(stats.attendance.percentage / 100) * 352} 352`}
                  className="text-emerald-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{stats.attendance.percentage}%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-emerald-500/10 rounded-lg p-2">
              <p className="text-lg font-semibold text-emerald-400">{stats.attendance.present}</p>
              <p className="text-xs text-slate-400">Present</p>
            </div>
            <div className="bg-rose-500/10 rounded-lg p-2">
              <p className="text-lg font-semibold text-rose-400">{stats.attendance.absent}</p>
              <p className="text-xs text-slate-400">Absent</p>
            </div>
            <div className="bg-amber-500/10 rounded-lg p-2">
              <p className="text-lg font-semibold text-amber-400">{stats.attendance.late}</p>
              <p className="text-xs text-slate-400">Late</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity and Upcoming */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Tasks */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-semibold text-white">Recent Tasks</h2>
            </div>
          </div>

          <div className="space-y-3">
            {recent?.tasks && recent.tasks.length > 0 ? (
              recent.tasks.map((task) => (
                <div
                  key={task._id}
                  className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      task.status === 'completed' ? 'bg-emerald-400' :
                      task.status === 'in-progress' ? 'bg-sky-400' : 'bg-amber-400'
                    }`} />
                    <span className="text-sm text-white truncate max-w-[200px]">{task.title}</span>
                  </div>
                  <Badge variant={
                    task.status === 'completed' ? 'success' :
                    task.status === 'in-progress' ? 'info' : 'warning'
                  }>
                    {task.status}
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500 text-center py-4">No recent tasks</p>
            )}
          </div>
        </Card>

        {/* Upcoming Deadlines */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-semibold text-white">Upcoming Deadlines</h2>
            </div>
          </div>

          <div className="space-y-3">
            {recent?.upcomingDeadlines && recent.upcomingDeadlines.length > 0 ? (
              recent.upcomingDeadlines.map((goal) => (
                <div
                  key={goal._id}
                  className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <Target className="w-4 h-4 text-amber-400" />
                    <span className="text-sm text-white truncate max-w-[200px]">{goal.title}</span>
                  </div>
                  <span className="text-xs text-slate-400">{formatDate(goal.deadline)}</span>
                </div>
              ))
            ) : (
              <p className="text-sm text-slate-500 text-center py-4">No upcoming deadlines</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

