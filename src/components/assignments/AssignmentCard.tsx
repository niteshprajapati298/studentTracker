'use client';

import { Assignment } from '@/types';
import { Badge } from '@/components/ui';
import { FileText, Calendar, Download, MoreVertical, Edit2, Trash2, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface AssignmentCardProps {
  assignment: Assignment;
  onEdit: (assignment: Assignment) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Assignment['status']) => void;
}

export default function AssignmentCard({ assignment, onEdit, onDelete, onStatusChange }: AssignmentCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const statusColors = {
    pending: 'warning',
    submitted: 'info',
    graded: 'success',
  } as const;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const isOverdue = assignment.dueDate && new Date(assignment.dueDate) < new Date() && assignment.status === 'pending';

  return (
    <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-5 hover:bg-slate-800/60 hover:border-slate-600/50 transition-all duration-200 group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 flex-1">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
            assignment.status === 'graded'
              ? 'bg-emerald-500/20 text-emerald-400'
              : assignment.status === 'submitted'
                ? 'bg-sky-500/20 text-sky-400'
                : isOverdue
                  ? 'bg-rose-500/20 text-rose-400'
                  : 'bg-amber-500/20 text-amber-400'
          }`}>
            <FileText className="w-6 h-6" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant={statusColors[assignment.status]}>
                {assignment.status}
              </Badge>
              {assignment.subject && (
                <Badge variant="default">{assignment.subject}</Badge>
              )}
            </div>

            <h3 className="text-white font-semibold mb-1 truncate">{assignment.title}</h3>
            
            {assignment.description && (
              <p className="text-slate-400 text-sm line-clamp-2 mb-2">{assignment.description}</p>
            )}

            <div className="flex items-center gap-4 text-xs">
              {assignment.dueDate && (
                <span className={`flex items-center gap-1 ${isOverdue ? 'text-rose-400' : 'text-slate-500'}`}>
                  <Calendar className="w-3.5 h-3.5" />
                  Due: {formatDate(assignment.dueDate)}
                </span>
              )}
              {assignment.submittedAt && (
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Submitted: {formatDate(assignment.submittedAt)}
                </span>
              )}
            </div>

            {assignment.grade && (
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <span className="text-xs text-slate-400">Grade:</span>
                <span className="text-sm font-semibold text-emerald-400">{assignment.grade}</span>
              </div>
            )}

            {assignment.fileUrl && (
              <div className="mt-3">
                <a
                  href={assignment.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-sm text-slate-300 hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  {assignment.fileName || 'Download File'}
                </a>
              </div>
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
            <div className="absolute right-0 mt-1 w-44 bg-slate-800 border border-slate-700/50 rounded-xl shadow-xl py-1 z-10">
              <button
                onClick={() => {
                  onEdit(assignment);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              {assignment.status === 'pending' && (
                <button
                  onClick={() => {
                    onStatusChange(assignment._id, 'submitted');
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-emerald-400 hover:bg-emerald-500/10"
                >
                  <CheckCircle className="w-4 h-4" />
                  Mark as Submitted
                </button>
              )}
              <button
                onClick={() => {
                  onDelete(assignment._id);
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

