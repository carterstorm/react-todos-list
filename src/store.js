import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../src/features/tasks/tasksSlice";

export default configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});