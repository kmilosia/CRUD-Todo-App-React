import React from "react";
import { createSlice } from "@reduxjs/toolkit"; 

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {
        addTask: (state, action) => {
            
        },
        deleteTask: (state, action) => {

        },
        updateTaskName: (state, action) => {

        },
    }
})

export const {addTask, deleteTask, updateTaskName} = taskSlice.actions;
export default taskSlice.reducer;