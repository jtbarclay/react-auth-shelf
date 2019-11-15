import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* editItem(action) {
    // log action.payload
    console.log('In editSaga action.payload', action.payload);
    // send item object to server
    yield axios.put('/api/shelf', action.payload);
    // get items back from server including the added item
    yield put({ type: 'GET_ITEMS'});
}

function* editSaga() {
    yield takeEvery('PUT_ITEM', editItem);
}

export default editSaga;