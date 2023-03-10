import { createSlice } from "@reduxjs/toolkit"; 

export const taskSlice = createSlice({
    name: "tasks",
    initialState: {value : [{id: 0, text: "text"},]},
    reducers: {
        addTask: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.value = state.value.filter((task) => task.id !== action.payload.id);
        },
        updateTaskName: (state, action) => {
            state.value.map((task) => {
                if(task.id === action.payload.id){
                    task.text = action.payload.text;
                }
            })
        },
    }
})

export const {addTask, deleteTask, updateTaskName} = taskSlice.actions;
export default taskSlice.reducer;