import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserInitialState } from '../models/user.model';

export const LOGIN_KEY = 'loginKey';
export const REGISTER_KEY = 'registerKey';

const loginFeatureSelector =
  createFeatureSelector<{ userData: IUserInitialState }>(LOGIN_KEY);
export const loginSelector = createSelector(loginFeatureSelector, (state) => state);

const registerFeatureSelector = createFeatureSelector<{ token: string }>(REGISTER_KEY);
export const registerSelector = createSelector(registerFeatureSelector, (state) => state);
