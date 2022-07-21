import { createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask : ({tasks}, {payload}) => {
            tasks.push(payload);
        },
        toogleTaskDone : state => {
            state.hideDone = !state.hideDone;
        },
    }
});

export const { addTask, toogleTaskDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;