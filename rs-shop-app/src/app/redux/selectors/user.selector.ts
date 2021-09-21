import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserInitialState } from '../models/user.model';

export const LOGIN_KEY = 'loginKey';
export const REGISTER_KEY = 'registerKey';
export const ADD_TO_CART_KEY = 'addToCartKey';

const loginFeatureSelector =
  createFeatureSelector<{ userData: IUserInitialState }>(LOGIN_KEY);
export const loginSelector = createSelector(loginFeatureSelector, (state) => state);

const registerFeatureSelector = createFeatureSelector<{ token: string }>(REGISTER_KEY);
export const registerSelector = createSelector(registerFeatureSelector, (state) => state);

const getCartItemsFeatureSelector =
  createFeatureSelector<IUserInitialState>(ADD_TO_CART_KEY);
export const getCartItemSelector = createSelector(
  getCartItemsFeatureSelector,
  (state) => state.cart,
);
