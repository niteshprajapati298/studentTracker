'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNotes, createNote, updateNote, deleteNote } from '@/store/slices/noteSlice';
import { Button, Modal, EmptyState, PageLoader, Input } from '@/components/ui';
import NoteCard from '@/components/notes/NoteCard';
import NoteForm from '@/components/notes/NoteForm';
import { Plus, StickyNote, Search } from 'lucide-react';
import type { Note, CreateNoteInput } from '@/types';
import toast from 'react-hot-toast';

export default function NotesPage() {
  const dispatch = useAppDispatch();
  const { notes, isLoading } = useAppSelector((state) => state.notes);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleCreate = async (data: CreateNoteInput) => {
    const result = await dispatch(createNote(data));
    if (createNote.fulfilled.match(result)) {
      toast.success('Note created successfully!');
      setIsModalOpen(false);
    }
  };

  const handleUpdate = async (data: CreateNoteInput) => {
    if (!editingNote) return;
    const result = await dispatch(updateNote({ id: editingNote._id, data }));
    if (updateNote.fulfilled.match(result)) {
      toast.success('Note updated successfully!');
      setEditingNote(null);
      setIsModalOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      const result = await dispatch(deleteNote(id));
      if (deleteNote.fulfilled.match(result)) {
        toast.success('Note deleted successfully!');
      }
    }
  };

  const handleTogglePin = async (id: string, isPinned: boolean) => {
    const result = await dispatch(updateNote({ id, data: { isPinned } }));
    if (updateNote.fulfilled.match(result)) {
      toast.success(isPinned ? 'Note pinned!' : 'Note unpinned!');
    }
  };

  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingNote(null);
  };

  const filteredNotes = notes.filter((note) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query) ||
      note.category?.toLowerCase().includes(query) ||
      note.tags?.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  // Separate pinned and unpinned notes
  const pinnedNotes = filteredNotes.filter((n) => n.isPinned);
  const unpinnedNotes = filteredNotes.filter((n) => !n.isPinned);

  if (isLoading && notes.length === 0) {
    return <PageLoader />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Notes</h1>
          <p className="text-slate-400">Keep all your study notes organized</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Note
        </Button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <Input
          placeholder="Search notes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12"
        />
      </div>

      {/* Pinned Notes */}
      {pinnedNotes.length > 0 && (
        <div>
          <h2 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wider">
            Pinned Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {pinnedNotes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onTogglePin={handleTogglePin}
              />
            ))}
          </div>
        </div>
      )}

      {/* All Notes */}
      {unpinnedNotes.length > 0 && (
        <div>
          {pinnedNotes.length > 0 && (
            <h2 className="text-sm font-medium text-slate-400 mb-3 uppercase tracking-wider">
              All Notes
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {unpinnedNotes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onTogglePin={handleTogglePin}
              />
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredNotes.length === 0 && (
        <EmptyState
          icon={StickyNote}
          title={searchQuery ? 'No notes found' : 'No notes yet'}
          description={
            searchQuery
              ? 'Try a different search term'
              : 'Create your first note to start organizing your thoughts'
          }
          actionLabel={!searchQuery ? 'Create Note' : undefined}
          onAction={!searchQuery ? () => setIsModalOpen(true) : undefined}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingNote ? 'Edit Note' : 'Create New Note'}
        size="lg"
      >
        <NoteForm
          initialData={editingNote || undefined}
          onSubmit={editingNote ? handleUpdate : handleCreate}
          onCancel={handleCloseModal}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
}

