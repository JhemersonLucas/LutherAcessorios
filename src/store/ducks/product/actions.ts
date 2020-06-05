import { action } from 'typesafe-actions';
import { ProductTypes } from './types';
import { Product } from '../products/types';

export const loadRequest = (id: number) =>
  action(ProductTypes.LOAD_REQUEST, id);

export const loadSuccess = (data: Product[]) =>
  action(ProductTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(ProductTypes.LOAD_FAILURE);
