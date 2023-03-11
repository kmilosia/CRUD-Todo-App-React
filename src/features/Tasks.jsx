import { createSlice } from "@reduxjs/toolkit"; 
const initialState = {
    count: 0,
    value: [],
    };
export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const task = {
                id: action.payload.id,
                text: action.payload.text,
            }
            state.value.push(task);
            state.count += 1;
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