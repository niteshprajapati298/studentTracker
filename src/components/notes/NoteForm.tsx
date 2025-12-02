'use client';

import { useForm } from 'react-hook-form';
import { Button, Input, TextArea } from '@/components/ui';
import type { CreateNoteInput, Note } from '@/types';

interface NoteFormProps {
  initialData?: Note;
  onSubmit: (data: CreateNoteInput) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function NoteForm({ initialData, onSubmit, onCancel, isLoading }: NoteFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<CreateNoteInput>({
    defaultValues: {
      title: initialData?.title || '',
      content: initialData?.content || '',
      category: initialData?.category || '',
      tags: initialData?.tags || [],
    },
  });

  const handleFormSubmit = (data: CreateNoteInput) => {
    // Convert tags string to array if it's a string
    const formattedData = {
      ...data,
      tags: typeof data.tags === 'string' 
        ? (data.tags as string).split(',').map(t => t.trim()).filter(Boolean)
        : data.tags,
    };
    onSubmit(formattedData);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-5">
      <Input
        label="Note Title"
        placeholder="Enter note title..."
        error={errors.title?.message}
        {...register('title', { required: 'Title is required' })}
      />

      <TextArea
        label="Content"
        placeholder="Write your note here..."
        rows={6}
        error={errors.content?.message}
        {...register('content', { required: 'Content is required' })}
      />

      <Input
        label="Category"
        placeholder="e.g., Study, Personal, Ideas"
        {...register('category')}
      />

      <Input
        label="Tags"
        placeholder="Comma-separated tags (e.g., important, exam, revision)"
        {...register('tags')}
      />

      <div className="flex gap-3 pt-2">
        <Button type="button" variant="ghost" onClick={onCancel} className="flex-1">
          Cancel
        </Button>
        <Button type="submit" isLoading={isLoading} className="flex-1">
          {initialData ? 'Update Note' : 'Create Note'}
        </Button>
      </div>
    </form>
  );
}

