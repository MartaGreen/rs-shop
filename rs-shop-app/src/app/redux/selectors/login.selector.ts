import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserInitialState } from '../models/login.model';

export const LOGIN_KEY = 'loginKey';

const loginFeatureSelector =
  createFeatureSelector<{ userData: IUserInitialState }>(LOGIN_KEY);
export const loginSelector = createSelector(loginFeatureSelector, (state) => state);
