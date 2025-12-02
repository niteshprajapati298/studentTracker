'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchGoals, createGoal, updateGoal, deleteGoal } from '@/store/slices/goalSlice';
import { Button, Modal, EmptyState, PageLoader, Card } from '@/components/ui';
import GoalCard from '@/components/goals/GoalCard';
import GoalForm from '@/components/goals/GoalForm';
import { Plus, Target, Filter } from 'lucide-react';
import type { Goal, CreateGoalInput } from '@/types';
import toast from 'react-hot-toast';

export default function GoalsPage() {
  const dispatch = useAppDispatch();
  const { goals, isLoading } = useAppSelector((state) => state.goals);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
  const [filter, setFilter] = useState<'all' | 'not-started' | 'in-progress' | 'completed'>('all');

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const handleCreate = async (data: CreateGoalInput) => {
    const result = await dispatch(createGoal(data));
    if (createGoal.fulfilled.match(result)) {
      toast.success('Goal created successfully!');
      setIsModalOpen(false);
    }
  };

  const handleUpdate = async (data: CreateGoalInput) => {
    if (!editingGoal) return;
    const result = await dispatch(updateGoal({ id: editingGoal._id, data }));
    if (updateGoal.fulfilled.match(result)) {
      toast.success('Goal updated successfully!');
      setEditingGoal(null);
      setIsModalOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this goal?')) {
      const result = await dispatch(deleteGoal(id));
      if (deleteGoal.fulfilled.match(result)) {
        toast.success('Goal deleted successfully!');
      }
    }
  };

  const handleProgressUpdate = async (id: string, progress: number) => {
    const result = await dispatch(updateGoal({ 
      id, 
      data: { 
        progress,
        status: progress === 100 ? 'completed' : 'in-progress'
      } 
    }));
    if (updateGoal.fulfilled.match(result)) {
      toast.success(progress === 100 ? 'Goal completed! 🎉' : 'Progress updated!');
    }
  };

  const handleEdit = (goal: Goal) => {
    setEditingGoal(goal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingGoal(null);
  };

  const filteredGoals = goals.filter((goal) => {
    if (filter === 'all') return true;
    return goal.status === filter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Goals' },
    { value: 'not-started', label: 'Not Started' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];

  // Stats
  const stats = {
    total: goals.length,
    completed: goals.filter((g) => g.status === 'completed').length,
    inProgress: goals.filter((g) => g.status === 'in-progress').length,
    notStarted: goals.filter((g) => g.status === 'not-started').length,
  };

  if (isLoading && goals.length === 0) {
    return <PageLoader />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Goals</h1>
          <p className="text-slate-400">Set and track your academic goals</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="text-center">
          <p className="text-2xl font-bold text-white">{stats.total}</p>
          <p className="text-sm text-slate-400">Total Goals</p>
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-emerald-400">{stats.completed}</p>
          <p className="text-sm text-slate-400">Completed</p>
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-sky-400">{stats.inProgress}</p>
          <p className="text-sm text-slate-400">In Progress</p>
        </Card>
        <Card className="text-center">
          <p className="text-2xl font-bold text-slate-400">{stats.notStarted}</p>
          <p className="text-sm text-slate-400">Not Started</p>
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

      {/* Goals Grid */}
      {filteredGoals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredGoals.map((goal) => (
            <GoalCard
              key={goal._id}
              goal={goal}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onProgressUpdate={handleProgressUpdate}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Target}
          title={filter === 'all' ? 'No goals yet' : `No ${filter.replace('-', ' ')} goals`}
          description={
            filter === 'all'
              ? 'Set your first goal to start tracking your progress'
              : `You don't have any ${filter.replace('-', ' ')} goals`
          }
          actionLabel={filter === 'all' ? 'Create Goal' : undefined}
          onAction={filter === 'all' ? () => setIsModalOpen(true) : undefined}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingGoal ? 'Edit Goal' : 'Create New Goal'}
        size="md"
      >
        <GoalForm
          initialData={editingGoal || undefined}
          onSubmit={editingGoal ? handleUpdate : handleCreate}
          onCancel={handleCloseModal}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
}

