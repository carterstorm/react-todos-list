import { createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask : ({tasks}, {payload: task}) => {
            tasks.push(task);
        },
        toogleTasksDone : state => {
            state.hideDone = !state.hideDone;
        },
        toogleHideDone: ({tasks}, {payload: taskId}) => {
            const index = tasks.findIndex(({id}) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        deleteTask: ({tasks}, {payload: taskId}) => {
            const index = tasks.findIndex(({id}) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllTasksDone: ({tasks}) => {
            tasks.forEach(task => task.done = true);
        },
    }
});

export const { 
    addTask, 
    toogleTasksDone, 
    toogleHideDone, 
    deleteTask, 
    setAllTasksDone 
} = tasksSlice.actions;

export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;