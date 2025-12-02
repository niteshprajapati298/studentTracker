'use client';

import { useForm } from 'react-hook-form';
import { Button, Input, TextArea, Select } from '@/components/ui';
import type { CreateAssignmentInput, Assignment } from '@/types';

interface AssignmentFormProps {
  initialData?: Assignment;
  onSubmit: (data: CreateAssignmentInput) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function AssignmentForm({ initialData, onSubmit, onCancel, isLoading }: AssignmentFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateAssignmentInput>({
    defaultValues: {
      title: initialData?.title || '',
      description: initialData?.description || '',
      subject: initialData?.subject || '',
      dueDate: initialData?.dueDate ? initialData.dueDate.split('T')[0] : '',
      status: initialData?.status || 'pending',
      fileUrl: initialData?.fileUrl || '',
    },
  });

  const statusOptions = [
    { value: 'pending', label: 'Pending' },
    { value: 'submitted', label: 'Submitted' },
    { value: 'graded', label: 'Graded' },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input
        label="Assignment Title"
        placeholder="Enter assignment title..."
        error={errors.title?.message}
        {...register('title', { required: 'Title is required' })}
      />

      <TextArea
        label="Description"
        placeholder="Describe your assignment..."
        rows={3}
        {...register('description')}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Subject"
          placeholder="e.g., Mathematics, Physics"
          {...register('subject')}
        />

        <Select
          label="Status"
          options={statusOptions}
          {...register('status')}
        />
      </div>

      <Input
        type="date"
        label="Due Date"
        {...register('dueDate')}
      />

      <Input
        label="File URL (Optional)"
        placeholder="https://drive.google.com/..."
        helperText="Link to your uploaded assignment file"
        {...register('fileUrl')}
      />

      <div className="flex gap-3 pt-2">
        <Button type="button" variant="ghost" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading} className="flex-1">
          {initialData ? 'Update Assignment' : 'Create Assignment'}
        </Button>
      </div>
    </form>
  );
}

