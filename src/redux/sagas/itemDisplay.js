import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions
function* itemDisplay(action) {
  try {
    const allItems = yield axios.get('/api/shelf')
    yield put({type: 'SET_ITEMS', payload: allItems.data})
  } catch (error) {
    console.log(error);
  }
}

function* itemDisplaySaga() {
  yield takeLatest('GET_ITEMS', itemDisplay);
}

export default itemDisplaySaga;
