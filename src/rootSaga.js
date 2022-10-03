import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./features/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ]);
};