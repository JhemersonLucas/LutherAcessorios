import { Reducer } from 'redux';
import { ProductsState, ProductsTypes } from './types';

const INITIAL_STATE: ProductsState = {
  data: [],
  loading: false,
  error: false,
};

const reducer: Reducer<ProductsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductsTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case ProductsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ProductsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] };
    default:
      return state;
  }
};

export default reducer;
