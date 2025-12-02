// User types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'admin';
}

// Task types
export interface Task {
  _id: string;
  userId: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput {
  title: string;
  description?: string;
  status?: 'pending' | 'in-progress' | 'completed';
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
}

// Attendance types
export interface Attendance {
  _id: string;
  userId: string;
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  subject?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAttendanceInput {
  date: string;
  status: 'present' | 'absent' | 'late' | 'excused';
  subject?: string;
  notes?: string;
}

// Note types
export interface Note {
  _id: string;
  userId: string;
  title: string;
  content: string;
  category?: string;
  tags?: string[];
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNoteInput {
  title: string;
  content: string;
  category?: string;
  tags?: string[];
  isPinned?: boolean;
}

// Goal types
export interface Goal {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  deadline: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'abandoned';
  progress: number;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateGoalInput {
  title: string;
  description?: string;
  deadline: string;
  status?: 'not-started' | 'in-progress' | 'completed' | 'abandoned';
  progress?: number;
  category?: string;
}

// Assignment types
export interface Assignment {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  subject?: string;
  dueDate?: string;
  submittedAt?: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  feedback?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAssignmentInput {
  title: string;
  description?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  subject?: string;
  dueDate?: string;
  status?: 'pending' | 'submitted' | 'graded';
}

// Dashboard types
export interface DashboardStats {
  tasks: {
    total: number;
    completed: number;
    pending: number;
    inProgress: number;
  };
  attendance: {
    total: number;
    present: number;
    absent: number;
    late: number;
    percentage: number;
  };
  notes: {
    total: number;
  };
  goals: {
    total: number;
    completed: number;
    active: number;
  };
  assignments: {
    total: number;
    pending: number;
    submitted: number;
  };
}

export interface RecentActivity {
  tasks: Array<{
    _id: string;
    title: string;
    status: string;
    updatedAt: string;
  }>;
  goals: Array<{
    _id: string;
    title: string;
    status: string;
    progress: number;
    deadline: string;
  }>;
  upcomingDeadlines: Array<{
    _id: string;
    title: string;
    deadline: string;
  }>;
}

// API Response types
export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
}

