import { Reducer } from 'redux';
import { ProductState, ProductTypes } from './types';
import { Product } from '../products/types';

const INITIAL_STATE: ProductState = {
  data: null,
  loading: false,
  error: false,
};

const reducer: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ProductTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: null };
    default:
      return state;
  }
};

export default reducer;
