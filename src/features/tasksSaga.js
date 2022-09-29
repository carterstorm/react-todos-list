import { call, put, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { axiosGetExampleTasks, setTasks } from "./tasksSlice";

function* axiosGetExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch {
        console.error("Something bad happened!");
    }
}

export function* watchGetAxiosExampleTasks() {
    yield takeEvery(axiosGetExampleTasks.type, axiosGetExampleTasksHandler);
}