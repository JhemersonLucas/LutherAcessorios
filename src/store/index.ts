import createSagaMiddleware from 'redux-saga';
import {
  createStore,
  Store,
  applyMiddleware,
  CombinedState,
  Action,
} from 'redux';
import { ProductState } from './ducks/product/types';
import { ProductsState } from './ducks/products/types';
import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSagas';

export interface ApplicationState {
  products: ProductsState;
  product: ProductState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
