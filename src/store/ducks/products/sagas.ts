import { call, put } from 'redux-saga/effects';
import { loadSuccess, loadFailure } from './actions';
import api from '../../../services/api';

export function* loadProducts() {
  try {
    const response = yield call(api.get, 'products');
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
