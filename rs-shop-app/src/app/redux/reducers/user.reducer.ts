import { createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.action';
import { IUserInitialState } from '../models/user.model';

const userInitialState: IUserInitialState = {} as IUserInitialState;

export const getUserReducer = createReducer(
  userInitialState,
  on(userActions.getUsersAction, (state, { login, password }) => ({
    ...state,
  })),
  on(userActions.getUsersSuccessAction, (state, { userData }) => ({
    ...state,
    userData: userData,
  })),
  on(userActions.getUsersFailAction, (state, { err }) => ({
    ...state,
  })),
);

export const registerUserReducer = createReducer(
  { token: '' },
  on(userActions.registerUserAction, (state, { userData }) => ({
    ...state,
  })),
  on(userActions.registerUserSuccessAction, (state, { token }) => ({
    ...state,
    token: token,
  })),
  on(userActions.registerUserFailAction, (state, { err }) => ({
    ...state,
  })),
);

export const addToCartReducer = createReducer(
  userInitialState,
  on(userActions.addToCartAction, (state, { id }) => ({
    ...state,
  })),
  on(userActions.addToCartSuccessAction, (state, { cartItem }) => ({
    ...state,
    cart: [cartItem],
  })),
  on(userActions.addToCartAction, (state, { id }) => ({
    ...state,
  })),
);
