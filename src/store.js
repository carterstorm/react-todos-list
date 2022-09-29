import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchGetAxiosExampleTasks } from "./features/tasksSaga";
import tasksReducer from "./features/tasksSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchGetAxiosExampleTasks);

export default store;