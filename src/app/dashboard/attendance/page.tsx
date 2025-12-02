'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAttendance, markAttendance, deleteAttendance } from '@/store/slices/attendanceSlice';
import { Button, Card, Badge, Modal, Input, Select, EmptyState, PageLoader } from '@/components/ui';
import { Calendar, Plus, ChevronLeft, ChevronRight, Trash2 } from 'lucide-react';
import type { CreateAttendanceInput } from '@/types';
import toast from 'react-hot-toast';

export default function AttendancePage() {
  const dispatch = useAppDispatch();
  const { records, isLoading } = useAppSelector((state) => state.attendance);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<CreateAttendanceInput['status']>('present');
  const [subject, setSubject] = useState('');

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  useEffect(() => {
    dispatch(fetchAttendance({ month: currentMonth + 1, year: currentYear }));
  }, [dispatch, currentMonth, currentYear]);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getAttendanceForDate = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return records.find((r) => r.date.split('T')[0] === dateStr);
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
  };

  const handleDayClick = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);
    const existing = getAttendanceForDate(day);
    if (existing) {
      setSelectedStatus(existing.status);
      setSubject(existing.subject || '');
    } else {
      setSelectedStatus('present');
      setSubject('');
    }
    setIsModalOpen(true);
  };

  const handleMarkAttendance = async () => {
    if (!selectedDate) return;

    const result = await dispatch(markAttendance({
      date: selectedDate,
      status: selectedStatus,
      subject: subject || undefined,
    }));

    if (markAttendance.fulfilled.match(result)) {
      toast.success('Attendance marked successfully!');
      setIsModalOpen(false);
    }
  };

  const handleDeleteAttendance = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this attendance record?')) {
      const result = await dispatch(deleteAttendance(id));
      if (deleteAttendance.fulfilled.match(result)) {
        toast.success('Attendance record deleted!');
      }
    }
  };

  const statusColors = {
    present: 'bg-emerald-500',
    absent: 'bg-rose-500',
    late: 'bg-amber-500',
    excused: 'bg-sky-500',
  };

  const statusOptions = [
    { value: 'present', label: 'Present' },
    { value: 'absent', label: 'Absent' },
    { value: 'late', label: 'Late' },
    { value: 'excused', label: 'Excused' },
  ];

  // Calculate stats
  const stats = {
    present: records.filter((r) => r.status === 'present').length,
    absent: records.filter((r) => r.status === 'absent').length,
    late: records.filter((r) => r.status === 'late').length,
    excused: records.filter((r) => r.status === 'excused').length,
  };

  if (isLoading && records.length === 0) {
    return <PageLoader />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Attendance</h1>
          <p className="text-slate-400">Track your daily attendance</p>
        </div>
        <Button onClick={() => {
          setSelectedDate(new Date().toISOString().split('T')[0]);
          setIsModalOpen(true);
        }}>
          <Plus className="w-4 h-4 mr-2" />
          Mark Today
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.entries(stats).map(([status, count]) => (
          <Card key={status} className="text-center">
            <div className={`w-10 h-10 mx-auto mb-3 rounded-xl flex items-center justify-center ${
              status === 'present' ? 'bg-emerald-500/20' :
              status === 'absent' ? 'bg-rose-500/20' :
              status === 'late' ? 'bg-amber-500/20' : 'bg-sky-500/20'
            }`}>
              <div className={`w-3 h-3 rounded-full ${statusColors[status as keyof typeof statusColors]}`} />
            </div>
            <p className="text-2xl font-bold text-white">{count}</p>
            <p className="text-sm text-slate-400 capitalize">{status}</p>
          </Card>
        ))}
      </div>

      {/* Calendar */}
      <Card>
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handlePrevMonth}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-lg font-semibold text-white">
            {monthNames[currentMonth]} {currentYear}
          </h2>
          <button
            onClick={handleNextMonth}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {dayNames.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-slate-500 py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for days before the first day of month */}
          {Array.from({ length: firstDayOfMonth }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square" />
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const attendance = getAttendanceForDate(day);
            const isToday = 
              day === new Date().getDate() && 
              currentMonth === new Date().getMonth() && 
              currentYear === new Date().getFullYear();

            return (
              <button
                key={day}
                onClick={() => handleDayClick(day)}
                className={`aspect-square flex flex-col items-center justify-center rounded-xl transition-all ${
                  isToday ? 'ring-2 ring-emerald-500/50' : ''
                } ${
                  attendance 
                    ? 'bg-slate-700/30 hover:bg-slate-700/50' 
                    : 'hover:bg-slate-700/30'
                }`}
              >
                <span className={`text-sm ${isToday ? 'text-emerald-400 font-semibold' : 'text-slate-300'}`}>
                  {day}
                </span>
                {attendance && (
                  <div className={`w-2 h-2 rounded-full mt-1 ${statusColors[attendance.status]}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-slate-700/50">
          {Object.entries(statusColors).map(([status, color]) => (
            <div key={status} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${color}`} />
              <span className="text-sm text-slate-400 capitalize">{status}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Recent Records */}
      {records.length > 0 && (
        <Card>
          <h3 className="text-lg font-semibold text-white mb-4">Recent Records</h3>
          <div className="space-y-3">
            {records.slice(0, 10).map((record) => (
              <div
                key={record._id}
                className="flex items-center justify-between p-3 bg-slate-700/30 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${statusColors[record.status]}`} />
                  <div>
                    <p className="text-sm text-white">
                      {new Date(record.date).toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                    {record.subject && (
                      <p className="text-xs text-slate-500">{record.subject}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={
                    record.status === 'present' ? 'success' :
                    record.status === 'absent' ? 'danger' :
                    record.status === 'late' ? 'warning' : 'info'
                  }>
                    {record.status}
                  </Badge>
                  <button
                    onClick={() => handleDeleteAttendance(record._id)}
                    className="p-1.5 text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {records.length === 0 && (
        <EmptyState
          icon={Calendar}
          title="No attendance records"
          description="Start marking your attendance to track your presence"
          actionLabel="Mark Today's Attendance"
          onAction={() => {
            setSelectedDate(new Date().toISOString().split('T')[0]);
            setIsModalOpen(true);
          }}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Mark Attendance"
        size="sm"
      >
        <div className="space-y-4">
          <Input
            type="date"
            label="Date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          <Select
            label="Status"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as CreateAttendanceInput['status'])}
            options={statusOptions}
          />

          <Input
            label="Subject (Optional)"
            placeholder="e.g., Mathematics"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />

          <div className="flex gap-3 pt-2">
            <Button variant="ghost" onClick={() => setIsModalOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleMarkAttendance} isLoading={isLoading} className="flex-1">
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

