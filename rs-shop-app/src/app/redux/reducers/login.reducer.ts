import { createReducer, on } from '@ngrx/store';
import * as loginActions from '../actions/login.action';
import { IUserInitialState } from '../models/login.model';

const userInitialState: IUserInitialState = {} as IUserInitialState;

export const getUserReducer = createReducer(
  userInitialState,
  on(loginActions.getUsersAction, (state, { login, password }) => ({
    ...state,
  })),
  on(loginActions.getUsersSuccessAction, (state, { userData }) => ({
    ...state,
    userData: userData,
  })),
  on(loginActions.getUsersFailAction, (state, { err }) => ({
    ...state,
  })),
);
