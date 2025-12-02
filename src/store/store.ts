import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import taskReducer from './slices/taskSlice';
import attendanceReducer from './slices/attendanceSlice';
import noteReducer from './slices/noteSlice';
import goalReducer from './slices/goalSlice';
import assignmentReducer from './slices/assignmentSlice';
import dashboardReducer from './slices/dashboardSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: taskReducer,
    attendance: attendanceReducer,
    notes: noteReducer,
    goals: goalReducer,
    assignments: assignmentReducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

