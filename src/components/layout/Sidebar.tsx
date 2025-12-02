'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { logout } from '@/store/slices/authSlice';
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  StickyNote,
  Target,
  FileText,
  X,
  GraduationCap,
  LogOut,
  Settings,
  HelpCircle,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Clock,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const mainMenuItems = [
  { 
    href: '/dashboard', 
    label: 'Dashboard', 
    icon: LayoutDashboard,
    description: 'Overview & analytics',
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-500/10',
  },
  { 
    href: '/dashboard/tasks', 
    label: 'Tasks', 
    icon: CheckSquare,
    description: 'Manage to-dos',
    color: 'from-sky-500 to-blue-600',
    bgColor: 'bg-sky-500/10',
  },
  { 
    href: '/dashboard/attendance', 
    label: 'Attendance', 
    icon: Calendar,
    description: 'Track presence',
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-500/10',
  },
  { 
    href: '/dashboard/notes', 
    label: 'Notes', 
    icon: StickyNote,
    description: 'Study notes',
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-500/10',
  },
  { 
    href: '/dashboard/goals', 
    label: 'Goals', 
    icon: Target,
    description: 'Set objectives',
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-500/10',
  },
  { 
    href: '/dashboard/assignments', 
    label: 'Assignments', 
    icon: FileText,
    description: 'Submit work',
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-500/10',
  },
];

const quickStats = [
  { label: 'Tasks Done', value: '12', icon: CheckSquare, trend: '+3' },
  { label: 'Streak', value: '7d', icon: Zap, trend: 'Active' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleLogout = async () => {
    await dispatch(logout());
    router.push('/login');
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-r border-slate-700/30 transform transition-all duration-300 ease-out lg:translate-x-0 lg:static lg:z-0 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header with Logo */}
        <div className="flex items-center justify-between h-16 px-5 border-b border-slate-700/30 flex-shrink-0">
          <Link href="/dashboard" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30 group-hover:shadow-emerald-500/50 transition-all duration-300 group-hover:scale-105">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 animate-pulse" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                StudentTrack
              </h1>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Activity Tracker</p>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200 hover:rotate-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* User Profile Card */}
        <div className="px-4 py-4 flex-shrink-0">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 backdrop-blur border border-slate-700/30 rounded-2xl p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {user?.name?.charAt(0).toUpperCase() || 'S'}
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-slate-800" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">{user?.name || 'Student'}</p>
                <p className="text-xs text-slate-400 truncate">{user?.email || 'student@email.com'}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-300">{getGreeting()}!</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-4 pb-3 flex-shrink-0">
          <div className="grid grid-cols-2 gap-2">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-800/40 border border-slate-700/20 rounded-xl p-3 hover:bg-slate-800/60 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-[10px] text-slate-500 uppercase tracking-wide">{stat.label}</span>
                </div>
                <div className="flex items-end justify-between">
                  <span className="text-lg font-bold text-white">{stat.value}</span>
                  <span className="text-[10px] text-emerald-400 font-medium">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation - Scrollable */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 custom-scrollbar">
          <p className="px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-6 h-px bg-slate-700" />
            Main Menu
            <span className="flex-1 h-px bg-slate-700" />
          </p>
          
          <div className="space-y-1">
            {mainMenuItems.map((item) => {
              const isActive = pathname === item.href;
              const isHovered = hoveredItem === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-500/15 to-teal-500/10 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-emerald-400 to-teal-500 rounded-r-full" />
                  )}

                  {/* Icon container */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${item.color} shadow-lg`
                        : `${item.bgColor} group-hover:scale-105`
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-300'}`} />
                  </div>

                  {/* Label and description */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${isActive ? 'text-white' : ''}`}>
                      {item.label}
                    </p>
                    <p className={`text-[10px] truncate transition-all duration-200 ${
                      isActive || isHovered ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ChevronRight
                    className={`w-4 h-4 transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-400 translate-x-0 opacity-100'
                        : 'text-slate-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Divider */}
          <div className="my-4 px-3">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
          </div>

          {/* Secondary Menu */}
          <p className="px-3 py-2 text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-2">
            <span className="w-6 h-px bg-slate-700" />
            More
            <span className="flex-1 h-px bg-slate-700" />
          </p>

          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center">
                <Settings className="w-4 h-4" />
              </div>
              <span className="text-sm">Settings</span>
            </button>
            
            <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
              <div className="w-9 h-9 rounded-lg bg-slate-800/50 flex items-center justify-center">
                <HelpCircle className="w-4 h-4" />
              </div>
              <span className="text-sm">Help & Support</span>
            </button>
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-slate-700/30 flex-shrink-0 space-y-3">
          {/* Motivation Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-500/20 rounded-2xl p-4">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Keep Going!</p>
                  <p className="text-[10px] text-slate-400">You're doing great</p>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Weekly Progress</span>
                  <span className="text-emerald-400 font-medium">75%</span>
                </div>
                <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000"
                    style={{ width: '75%' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800/50 hover:bg-rose-500/10 border border-slate-700/30 hover:border-rose-500/30 rounded-xl text-slate-400 hover:text-rose-400 transition-all duration-200 group"
          >
            <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(71, 85, 105, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(71, 85, 105, 0.5);
        }
      `}</style>
    </>
  );
}
