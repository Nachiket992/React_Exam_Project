import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await axios.get("http://localhost:3000/students");
  return response.data;
});

export const AddStudents = createAsyncThunk('students/AddStudents', async (data) => {
  const response = await axios.post("http://localhost:3000/students", data);
  return response.data;
});

export const EditStudents = createAsyncThunk('students/EditStudents', async (data) => {
  const response = await axios.put(`http://localhost:3000/students/${data.id}`, data);
  return response.data;
});

export const DeletStudents = createAsyncThunk('students/DeletStudents', async (id) => {
  await axios.delete(`http://localhost:3000/students/${id}`);
  return id; 
});

const initialState = {
  students: []
};

const allStudentsSlice = createSlice({
  name: "students",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.students = action.payload;
      })
      .addCase(AddStudents.fulfilled, (state, action) => {
        state.students.push(action.payload);
      })
      .addCase(EditStudents.fulfilled, (state, action) => {
        const index = state.students.findIndex(stu => stu.id === action.payload.id);
        if (index !== -1) {
          state.students[index] = action.payload;
        }
      })
      .addCase(DeletStudents.fulfilled, (state, action) => {
        state.students = state.students.filter(stu => stu.id !== action.payload);
      });
  }
});

export default allStudentsSlice.reducer;
