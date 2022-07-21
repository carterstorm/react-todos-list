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
        toogleTasksDone : state => {
            state.hideDone = !state.hideDone;
        },
        toogleHideDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },
        deleteTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index, 1);
        },
    }
});

export const { addTask, toogleTasksDone, toogleHideDone, deleteTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;