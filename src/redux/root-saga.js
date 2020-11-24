
// instead of doing sagaMiddleware.run every time

import {all, call} from 'redux-saga/effects';

import {fetchCollectionsStart} from "./shop/shop.sagas";

export default function* rootSaga() {
    //list all the sagas
    yield all([
        call(fetchCollectionsStart)
    ]);
    // all take each saga and run it in a separate task (thread)
    // we can also do --- fetchCollectionsStart() without call
}