import { all } from "redux-saga/effects";
import { watchGetAxiosExampleTasks } from "./features/tasksSaga";

export default function* rootSaga() {
    yield all([
        watchGetAxiosExampleTasks(),
    ]);
};