import { call, put } from 'redux-saga/effects';
import { loadSuccess, loadFailure } from './actions';
import api from '../../../services/api';

export function* loadProduct(data: any) {
  const id = data.payload;
  try {
    const response = yield call(api.get, `product&pid=${id}`);
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
