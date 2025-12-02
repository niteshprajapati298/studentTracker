'use client';

import { Note } from '@/types';
import { Badge } from '@/components/ui';
import { Pin, MoreVertical, Edit2, Trash2, PinOff } from 'lucide-react';
import { useState } from 'react';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
  onTogglePin: (id: string, isPinned: boolean) => void;
}

export default function NoteCard({ note, onEdit, onDelete, onTogglePin }: NoteCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const colors = [
    'from-emerald-500/20 to-teal-500/10 border-emerald-500/20',
    'from-sky-500/20 to-blue-500/10 border-sky-500/20',
    'from-violet-500/20 to-purple-500/10 border-violet-500/20',
    'from-amber-500/20 to-orange-500/10 border-amber-500/20',
    'from-rose-500/20 to-pink-500/10 border-rose-500/20',
  ];

  const colorIndex = note.title.length % colors.length;

  return (
    <div
      className={`bg-gradient-to-br ${colors[colorIndex]} backdrop-blur-sm border rounded-2xl p-5 hover:scale-[1.02] transition-all duration-200 group cursor-pointer`}
      onClick={() => onEdit(note)}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          {note.isPinned && (
            <Pin className="w-4 h-4 text-amber-400 fill-amber-400" />
          )}
          {note.category && (
            <Badge variant="default">{note.category}</Badge>
          )}
        </div>

        <div className="relative">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
          >
            <MoreVertical className="w-4 h-4" />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-1 w-40 bg-slate-800 border border-slate-700/50 rounded-xl shadow-xl py-1 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(note);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white"
              >
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onTogglePin(note._id, !note.isPinned);
                  setShowMenu(false);
                }}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white"
              >
                {note.isPinned ? <PinOff className="w-4 h-4" /> : <Pin className="w-4 h-4" />}
                {note.isPinned ? 'Unpin' : 'Pin'}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(note._id);
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

      <h3 className="text-white font-semibold mb-2 line-clamp-1">{note.title}</h3>
      <p className="text-slate-300 text-sm line-clamp-3 mb-3">{note.content}</p>

      <div className="flex items-center justify-between">
        {note.tags && note.tags.length > 0 && (
          <div className="flex gap-1 flex-wrap">
            {note.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-xs text-slate-400 bg-slate-700/30 px-2 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        )}
        <span className="text-xs text-slate-500">{formatDate(note.updatedAt)}</span>
      </div>
    </div>
  );
}

