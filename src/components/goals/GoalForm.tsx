'use client';

import { useForm } from 'react-hook-form';
import { Button, Input, TextArea, Select } from '@/components/ui';
import type { CreateGoalInput, Goal } from '@/types';

interface GoalFormProps {
  initialData?: Goal;
  onSubmit: (data: CreateGoalInput) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function GoalForm({ initialData, onSubmit, onCancel, isLoading }: GoalFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateGoalInput>({
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      deadline: initialData?.deadline ? initialData.deadline.split('T')[0] : '',
      status: initialData?.status || 'not-started',
      progress: initialData?.progress || 0,
      category: initialData?.category || '',
    },
  });

  const statusOptions = [
    { value: 'not-started', label: 'Not Started' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
    { value: 'abandoned', label: 'Abandoned' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        label="Goal Title"
        placeholder="Enter goal title..."
        error={errors.title?.message}
        {...register('title', { required: 'Title is required' })}
      />

      <TextArea
        label="Description"
        placeholder="Describe your goal..."
        rows={3}
        {...register('description')}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="date"
          label="Deadline"
          error={errors.deadline?.message}
          {...register('deadline', { required: 'Deadline is required' })}
        />

        <Select
          label="Status"
          options={statusOptions}
          {...register('status')}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="number"
          label="Progress (%)"
          min={0}
          max={100}
          {...register('progress', { valueAsNumber: true })}
        />

        <Input
          label="Category"
          placeholder="e.g., Academic, Personal"
          {...register('category')}
        />
      </div>

      <div className="flex gap-3 pt-2">
        <Button type="button" variant="ghost" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading} className="flex-1">
          {initialData ? 'Update Goal' : 'Create Goal'}
        </Button>
      </div>
    </form>
  );
}

