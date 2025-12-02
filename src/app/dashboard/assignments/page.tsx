'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchAssignments, createAssignment, updateAssignment, deleteAssignment } from '@/store/slices/assignmentSlice';
import { Button, Modal, EmptyState, PageLoader, Card } from '@/components/ui';
import AssignmentCard from '@/components/assignments/AssignmentCard';
import AssignmentForm from '@/components/assignments/AssignmentForm';
import { Plus, FileText, Filter } from 'lucide-react';
import type { Assignment, CreateAssignmentInput } from '@/types';
import toast from 'react-hot-toast';

export default function AssignmentsPage() {
  const dispatch = useAppDispatch();
  const { assignments, isLoading } = useAppSelector((state) => state.assignments);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAssignment, setEditingAssignment] = useState<Assignment | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'submitted' | 'graded'>('all');

  useEffect(() => {
    dispatch(fetchAssignments());
  }, [dispatch]);

  const handleCreate = async (data: CreateAssignmentInput) => {
    const result = await dispatch(createAssignment(data));
    if (createAssignment.fulfilled.match(result)) {
      toast.success('Assignment created successfully!');
      setIsModalOpen(false);
    }
  };

  const handleUpdate = async (data: CreateAssignmentInput) => {
    if (!editingAssignment) return;
    const result = await dispatch(updateAssignment({ id: editingAssignment._id, data }));
    if (updateAssignment.fulfilled.match(result)) {
      toast.success('Assignment updated successfully!');
      setEditingAssignment(null);
      setIsModalOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      const result = await dispatch(deleteAssignment(id));
      if (deleteAssignment.fulfilled.match(result)) {
        toast.success('Assignment deleted successfully!');
      }
    }
  };

  const handleStatusChange = async (id: string, status: Assignment['status']) => {
    const result = await dispatch(updateAssignment({ id, data: { status } }));
    if (updateAssignment.fulfilled.match(result)) {
      toast.success(status === 'submitted' ? 'Assignment marked as submitted!' : 'Status updated!');
    }
  };

  const handleEdit = (assignment: Assignment) => {
    setEditingAssignment(assignment);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingAssignment(null);
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (filter === 'all') return true;
    return assignment.status === filter;
  });

  const filterOptions = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'submitted', label: 'Submitted' },
    { value: 'graded', label: 'Graded' },
  ];

  // Stats
  const stats = {
    total: assignments.length,
    pending: assignments.filter((a) => a.status === 'pending').length,
    submitted: assignments.filter((a) => a.status === 'submitted').length,
    graded: assignments.filter((a) => a.status === 'graded').length,
  };

  // Check for overdue
  const overdueCount = assignments.filter(
    (a) => a.dueDate && new Date(a.dueDate) < new Date() && a.status === 'pending'
  ).length;

  if (isLoading && assignments.length === 0) {
    return <PageLoader />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Assignments</h1>
          <p className="text-slate-400">Manage your assignment submissions</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Assignment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="text-center">
          <p className="text-2xl font-bold text-white">{stats.total}</p>
          <p className="text-sm text-slate-400">Total</p>
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-amber-400">{stats.pending}</p>
          <p className="text-sm text-slate-400">Pending</p>
          {overdueCount > 0 && (
            <p className="text-xs text-rose-400 mt-1">{overdueCount} overdue</p>
          )}
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-sky-400">{stats.submitted}</p>
          <p className="text-sm text-slate-400">Submitted</p>
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-emerald-400">{stats.graded}</p>
          <p className="text-sm text-slate-400">Graded</p>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        <Filter className="w-4 h-4 text-slate-400 flex-shrink-0" />
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value as typeof filter)}
            className={`px-4 py-2 text-sm font-medium rounded-xl whitespace-nowrap transition-all ${
              filter === option.value
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Assignments List */}
      {filteredAssignments.length > 0 ? (
        <div className="space-y-4">
          {filteredAssignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={FileText}
          title={filter === 'all' ? 'No assignments yet' : `No ${filter} assignments`}
          description={
            filter === 'all'
              ? 'Create your first assignment to start tracking submissions'
              : `You don't have any ${filter} assignments`
          }
          actionLabel={filter === 'all' ? 'Create Assignment' : undefined}
          onAction={filter === 'all' ? () => setIsModalOpen(true) : undefined}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingAssignment ? 'Edit Assignment' : 'Create New Assignment'}
        size="md"
      >
        <AssignmentForm
          initialData={editingAssignment || undefined}
          onSubmit={editingAssignment ? handleUpdate : handleCreate}
          onCancel={handleCloseModal}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
}

