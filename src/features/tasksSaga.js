import { call, delay, put, select, takeEvery } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
    fetchGetExampleTasks,
    fetchExampleTaskSuccess,
    fetchExampleTaskError,
    selectTasks
} from "./tasksSlice";

function* fetchGetExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTaskSuccess(exampleTasks));
    } catch {
        console.error("Something bad happened!");
        yield put(fetchExampleTaskError())
    };
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
    yield takeEvery(fetchGetExampleTasks.type, fetchGetExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};