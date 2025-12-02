'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchTasks, createTask, updateTask, deleteTask } from '@/store/slices/taskSlice';
import { Button, Modal, EmptyState, PageLoader } from '@/components/ui';
import TaskCard from '@/components/tasks/TaskCard';
import TaskForm from '@/components/tasks/TaskForm';
import { Plus, CheckSquare, Filter } from 'lucide-react';
import type { Task, CreateTaskInput } from '@/types';
import toast from 'react-hot-toast';

export default function TasksPage() {
  const dispatch = useAppDispatch();
  const { tasks, isLoading } = useAppSelector((state) => state.tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filter, setFilter] = useState<'all' | 'pending' | 'in-progress' | 'completed'>('all');

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleCreate = async (data: CreateTaskInput) => {
    const result = await dispatch(createTask(data));
    if (createTask.fulfilled.match(result)) {
      toast.success('Task created successfully!');
      setIsModalOpen(false);
    }
  };

  const handleUpdate = async (data: CreateTaskInput) => {
    if (!editingTask) return;
    const result = await dispatch(updateTask({ id: editingTask._id, data }));
    if (updateTask.fulfilled.match(result)) {
      toast.success('Task updated successfully!');
      setEditingTask(null);
      setIsModalOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const result = await dispatch(deleteTask(id));
      if (deleteTask.fulfilled.match(result)) {
        toast.success('Task deleted successfully!');
      }
    }
  };

  const handleStatusChange = async (id: string, status: Task['status']) => {
    const result = await dispatch(updateTask({ id, data: { status } }));
    if (updateTask.fulfilled.match(result)) {
      toast.success('Task status updated!');
    }
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const filterOptions = [
    { value: 'all', label: 'All Tasks' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];

  if (isLoading && tasks.length === 0) {
    return <PageLoader />;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Tasks</h1>
          <p className="text-slate-400">Manage your daily tasks and to-dos</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Task
        </Button>
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

      {/* Tasks Grid */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={CheckSquare}
          title={filter === 'all' ? 'No tasks yet' : `No ${filter} tasks`}
          description={
            filter === 'all'
              ? 'Create your first task to start tracking your progress'
              : `You don't have any ${filter} tasks`
          }
          actionLabel={filter === 'all' ? 'Create Task' : undefined}
          onAction={filter === 'all' ? () => setIsModalOpen(true) : undefined}
        />
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={editingTask ? 'Edit Task' : 'Create New Task'}
        size="md"
      >
        <TaskForm
          initialData={editingTask || undefined}
          onSubmit={editingTask ? handleUpdate : handleCreate}
          onCancel={handleCloseModal}
          isLoading={isLoading}
        />
      </Modal>
    </div>
  );
}

