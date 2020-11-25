
// instead of doing sagaMiddleware.run every time

import {all, call} from 'redux-saga/effects';

import {userSagas} from "./user/user.sagas";
import {cartSagas} from "./cart/cart.sagas";
import {shopSagas} from "./shop/shop.sagas";

export default function* rootSaga() {
    //list all the sagas
    yield all([
        call(userSagas),
        call(cartSagas),
        call(shopSagas)
    ]);
    // all take each saga and run it in a separate task (thread)
    // we can also do --- fetchCollectionsStart() without call
}