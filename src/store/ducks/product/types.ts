import { Product } from '../products/types';

export enum ProductTypes {
  LOAD_REQUEST = 'product/LOAD_REQUEST',
  LOAD_SUCCESS = 'product/LOAD_SUCCESS',
  LOAD_FAILURE = 'product/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface ProductState {
  readonly data: Product | null;
  readonly loading: boolean;
  readonly error: boolean;
}
