import { createAction, props } from '@ngrx/store';
import { IUserInitialState } from '../models/login.model';

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
