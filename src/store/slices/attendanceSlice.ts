import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { Attendance, CreateAttendanceInput } from '@/types';

interface AttendanceState {
  records: Attendance[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AttendanceState = {
  records: [],
  isLoading: false,
  error: null,
};

export const fetchAttendance = createAsyncThunk(
  'attendance/fetchAttendance',
  async (params: { month?: number; year?: number } = {}, { rejectWithValue }) => {
    try {
      const queryParams = new URLSearchParams();
      if (params.month) queryParams.append('month', params.month.toString());
      if (params.year) queryParams.append('year', params.year.toString());
      
      const response = await axios.get(`/api/attendance?${queryParams.toString()}`);
      return response.data.attendance;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Failed to fetch attendance');
    }
  }
);

export const markAttendance = createAsyncThunk(
  'attendance/markAttendance',
  async (data: CreateAttendanceInput, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/attendance', data);
      return response.data.attendance;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Failed to mark attendance');
    }
  }
);

export const deleteAttendance = createAsyncThunk(
  'attendance/deleteAttendance',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/attendance/${id}`);
      return id;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue('Failed to delete attendance');
    }
  }
);

const attendanceSlice = createSlice({
  name: 'attendance',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch attendance
      .addCase(fetchAttendance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.records = action.payload;
      })
      .addCase(fetchAttendance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Mark attendance
      .addCase(markAttendance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(markAttendance.fulfilled, (state, action) => {
        state.isLoading = false;
        const existingIndex = state.records.findIndex(
          (r) => r._id === action.payload._id
        );
        if (existingIndex !== -1) {
          state.records[existingIndex] = action.payload;
        } else {
          state.records.unshift(action.payload);
        }
      })
      .addCase(markAttendance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Delete attendance
      .addCase(deleteAttendance.fulfilled, (state, action) => {
        state.records = state.records.filter((r) => r._id !== action.payload);
      });
  },
});

export const { clearError } = attendanceSlice.actions;
export default attendanceSlice.reducer;

