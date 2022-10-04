import { call, delay, put, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchGetExampleTasks, fetchExampleTaskSuccess, fetchExampleTaskError } from "./tasksSlice";

function* fetchGetExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTaskSuccess(exampleTasks));
    } catch {
        console.error("Something bad happened!");
        yield put(fetchExampleTaskError())
    }
};

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchGetExampleTasks.type, fetchGetExampleTasksHandler);
};