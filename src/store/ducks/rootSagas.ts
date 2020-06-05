import { all, takeLatest } from 'redux-saga/effects';
import { ProductsTypes } from './products/types';
import { ProductTypes } from './product/types';
import { loadProducts } from './products/sagas';
import { loadProduct } from './product/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductsTypes.LOAD_REQUEST, loadProducts),
    takeLatest(ProductTypes.LOAD_REQUEST, loadProduct),
  ]);
}
