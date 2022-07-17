import { createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        addTask : ({tasks}, {payload}) => {
            tasks.push(payload);
        }
    }
});