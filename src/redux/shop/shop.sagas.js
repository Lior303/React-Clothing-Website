import {takeLatest, call, put} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsSuccess, fetchCollectionsFailure} from "./shop.actions";

export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');

        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);

        // put is a saga effect from creating actions
        // just like dispatch

        yield put(fetchCollectionsSuccess(collectionMap));
    }
    catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    // this saga is listening to FETCH_COLLECTIONS_START action to take place
    // when it does take place it invoke fetchCollectionsAsync this function
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}