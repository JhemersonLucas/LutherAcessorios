export enum ProductsTypes {
  LOAD_REQUEST = 'products/LOAD_REQUEST',
  LOAD_SUCCESS = 'products/LOAD_SUCCESS',
  LOAD_FAILURE = 'products/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  image2?: string;
  image3?: string;
  price: string;
  amount: string;
}

export interface ProductsState {
  readonly data: Product[];
  readonly loading: boolean;
  readonly error: boolean;
}
