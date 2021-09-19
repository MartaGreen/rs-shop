import { createAction, props } from '@ngrx/store';
import { IRegisterUserData, IUserInitialState } from '../models/user.model';

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
