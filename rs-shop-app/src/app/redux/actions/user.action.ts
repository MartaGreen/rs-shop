import { createAction, props } from '@ngrx/store';
import { IRegisterUserData, IUserInitialState } from '../models/user.model';

//! Users actions

// Login user. Get user data
export const getUsersAction = createAction(
  '[GetUsers] get user',
  props<{ login: string; password: string }>(),
);
export const getUsersSuccessAction = createAction(
  '[GetUsers] get user',
  props<{ userData: IUserInitialState }>(),
);
export const getUsersFailAction = createAction(
  '[GetUsers] get user',
  props<{ err: Error }>(),
);

// Register user
export const registerUserAction = createAction(
  '[Register user] register user',
  props<{ userData: IRegisterUserData }>(),
);
export const registerUserSuccessAction = createAction(
  '[Register user] register user success',
  props<{ token: string }>(),
);
export const registerUserFailAction = createAction(
  '[Register user] register user fail',
  props<{ err: Error }>(),
);

//! Cart actions

// add to cart
export const addToCartAction = createAction(
  '[CartAdd] Add item to cart',
  props<{ id: string }>(),
);
export const addToCartSuccessAction = createAction(
  '[CartAdd] Add item to cart success',
  props<{ cartItem: string }>(),
);
export const addToCartFailAction = createAction(
  '[CartAdd] Add item to cart fail',
  props<{ err: Error }>(),
);
