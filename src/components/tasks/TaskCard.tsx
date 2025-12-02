'use client';

import { Task } from '@/types';
import { Badge } from '@/components/ui';
import { Calendar, Clock, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

export default function TaskCard({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const statusColors = {
    pending: 'warning',
    'in-progress': 'info',
    completed: 'success',
  } as const;

  const priorityColors = {
    low: 'default',
    medium: 'warning',
    high: 'danger',
  } as const;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-200 group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant={statusColors[task.status]}>
              {task.status.replace('-', ' ')}
            </Badge>
            <Badge variant={priorityColors[task.priority]}>
              {task.priority}
            </Badge>
          </div>
          
          <h3 className="text-white font-semibold mb-1 truncate">{task.title}</h3>
          {task.description && (
            <p className="text-slate-400 text-sm line-clamp-2 mb-3">{task.description}</p>
          )}

          <div className="flex items-center gap-4 text-xs text-slate-500">
            {task.dueDate && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(task.dueDate)}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {formatDate(task.createdAt)}
            </span>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-1 w-40 bg-slate-800 border border-slate-700/50 rounded-xl shadow-xl py-1 z-10">
              <button
                onClick={() => {
                  onEdit(task);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              {task.status !== 'completed' && (
                <button
                  onClick={() => {
                    onStatusChange(task._id, 'completed');
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-emerald-400 hover:bg-emerald-500/10"
                >
                  Mark Complete
                </button>
              )}
              <button
                onClick={() => {
                  onDelete(task._id);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-rose-400 hover:bg-rose-500/10"
              >
                <Trash2 className="w-4 h-4" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

