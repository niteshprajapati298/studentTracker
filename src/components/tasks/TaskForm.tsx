'use client';

import { useForm } from 'react-hook-form';
import { Button, Input, TextArea, Select } from '@/components/ui';
import type { CreateTaskInput, Task } from '@/types';

interface TaskFormProps {
  initialData?: Task;
  onSubmit: (data: CreateTaskInput) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function TaskForm({ initialData, onSubmit, onCancel, isLoading }: TaskFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateTaskInput>({
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      status: initialData?.status || 'pending',
      priority: initialData?.priority || 'medium',
      dueDate: initialData?.dueDate ? initialData.dueDate.split('T')[0] : '',
    },
  });

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
  ];

  const priorityOptions = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        label="Task Title"
        placeholder="Enter task title..."
        error={errors.title?.message}
        {...register('title', { required: 'Title is required' })}
      />

      <TextArea
        label="Description"
        placeholder="Describe your task..."
        rows={3}
        {...register('description')}
      />

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Status"
          options={statusOptions}
          {...register('status')}
        />

        <Select
          label="Priority"
          options={priorityOptions}
          {...register('priority')}
        />
      </div>

      <Input
        type="date"
        label="Due Date"
        {...register('dueDate')}
      />

      <div className="flex gap-3 pt-2">
        <Button type="button" variant="ghost" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading} className="flex-1">
          {initialData ? 'Update Task' : 'Create Task'}
        </Button>
      </div>
    </form>
  );
}

