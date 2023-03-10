import {all} from "redux-saga/effects";
import {moviePopularWatcher} from "./popularMovie";

export function* rootWatcher() {
    yield all([moviePopularWatcher()])
}