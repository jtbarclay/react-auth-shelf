import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postItem(action) {
    // log action.payload
    console.log('In postSaga action.payload', action.payload);
    // send item object to server
    yield axios.post('/api/shelf', action.payload);
    // get items back from server including the added item
    yield put({ type: 'GET_ITEMS'});
}

function* postSaga() {
    yield takeEvery('POST_ITEM', postItem);
}

export default postSaga;