'use client';

import { Goal } from '@/types';
import { Badge, ProgressBar } from '@/components/ui';
import { Calendar, Target, MoreVertical, Edit2, Trash2 } from 'lucide-react';
import { useState } from 'react';

interface GoalCardProps {
  goal: Goal;
  onEdit: (goal: Goal) => void;
  onDelete: (id: string) => void;
  onProgressUpdate: (id: string, progress: number) => void;
}

export default function GoalCard({ goal, onEdit, onDelete, onProgressUpdate }: GoalCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const statusColors = {
    'not-started': 'default',
    'in-progress': 'info',
    completed: 'success',
    abandoned: 'danger',
  } as const;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isOverdue = new Date(goal.deadline) < new Date() && goal.status !== 'completed';
  const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24));

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-200 group">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            goal.status === 'completed' 
              ? 'bg-emerald-500/20 text-emerald-400' 
              : isOverdue 
                ? 'bg-rose-500/20 text-rose-400'
                : 'bg-sky-500/20 text-sky-400'
          }`}>
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-white font-semibold">{goal.title}</h3>
            {goal.category && (
              <span className="text-xs text-slate-500">{goal.category}</span>
            )}
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
                  onEdit(goal);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              {goal.status !== 'completed' && (
                <button
                  onClick={() => {
                    onProgressUpdate(goal._id, 100);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-emerald-400 hover:bg-emerald-500/10"
                >
                  Mark Complete
                </button>
              )}
              <button
                onClick={() => {
                  onDelete(goal._id);
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

      {goal.description && (
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{goal.description}</p>
      )}

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-400">Progress</span>
          <span className="text-white font-medium">{goal.progress}%</span>
        </div>
        <ProgressBar 
          value={goal.progress} 
          color={goal.status === 'completed' ? 'emerald' : isOverdue ? 'rose' : 'sky'} 
        />
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-700/50">
        <Badge variant={statusColors[goal.status]}>
          {goal.status.replace('-', ' ')}
        </Badge>
        <div className="flex items-center gap-1.5 text-xs">
          <Calendar className="w-3.5 h-3.5 text-slate-500" />
          <span className={isOverdue ? 'text-rose-400' : 'text-slate-400'}>
            {isOverdue 
              ? 'Overdue' 
              : goal.status === 'completed' 
                ? formatDate(goal.deadline)
                : daysLeft <= 0 
                  ? 'Due today'
                  : `${daysLeft} days left`}
          </span>
        </div>
      </div>
    </div>
  );
}

