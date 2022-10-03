import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
        loading: null,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toogleTasksDone: state => {
            state.hideDone = !state.hideDone;
        },
        toogleHideDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        deleteTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },
        setAllTasksDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },

        fetchGetExampleTasks: state => {
            state.loading = true;
        },

        fetchExampleTaskSuccess: (state, { payload: tasks }) => {
            state.loading = false;
            state.tasks = tasks;
        },

        fetchExampleTaskError: state => {
            state.loading = false;
        },
    }
});

export const {
    addTask,
    toogleTasksDone,
    toogleHideDone,
    deleteTask,
    setAllTasksDone,
    fetchGetExampleTasks,
    fetchExampleTaskSuccess,
    fetchExampleTaskError,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksLoading = state => selectTasksState(state).loading;
export const selectIsEveryTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;

export default tasksSlice.reducer;