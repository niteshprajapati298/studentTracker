import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IAssignment extends Document {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  subject?: string;
  dueDate?: Date;
  submittedAt?: Date;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  feedback?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AssignmentSchema: Schema<IAssignment> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    fileUrl: {
      type: String,
      trim: true,
    },
    fileName: {
      type: String,
      trim: true,
    },
    fileType: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [50, 'Subject cannot exceed 50 characters'],
    },
    dueDate: {
      type: Date,
    },
    submittedAt: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['pending', 'submitted', 'graded'],
      default: 'pending',
    },
    grade: {
      type: String,
      trim: true,
    },
    feedback: {
      type: String,
      trim: true,
      maxlength: [500, 'Feedback cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true,
  }
);

const Assignment: Model<IAssignment> = mongoose.models.Assignment || mongoose.model<IAssignment>('Assignment', AssignmentSchema);

export default Assignment;

