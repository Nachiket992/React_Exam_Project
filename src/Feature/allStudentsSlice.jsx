import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {

    const studentsData = await axios.get("http://localhost:3000/students");   
    
    return studentsData.data
    
})

const initialState = {
    students : []
}

const allStudentsSlice = createSlice({
    name : "students",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(fetchStudents.fulfilled, (state, action) => {
            
            state.students = action.payload;
            
        })
    }
});

export default allStudentsSlice.reducer;