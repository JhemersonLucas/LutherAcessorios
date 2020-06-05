import { combineReducers } from 'redux';
import { ProductState } from './product/types';
import { ProductsState } from './products/types';

import products from './products';
import product from './product';

// Interface for the reducer state.
export interface RootState {
  products: ProductsState;
  product: ProductState;
}

export default combineReducers<RootState>({
  products,
  product,
});
