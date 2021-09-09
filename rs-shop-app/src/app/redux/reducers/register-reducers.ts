import { ActionReducerMap } from '@ngrx/store';
import { IRegisterReducers } from '../models/register-reducers.model';
import { LOCATION_KEY } from '../selectors/action.selector';
import { CATEGORIES_KEY } from '../selectors/get-categories.selector';
import { ALL_CATEGORIES_KEY } from '../selectors/goods-catalog.selector';
import { getAllCategoriesReducer } from './action-catalog.reducer';
import { categoriesReducer } from './get-categories.reducer';
import { locationReducer } from './location.reducer';

export const reducers: ActionReducerMap<IRegisterReducers> = {
  [LOCATION_KEY]: locationReducer,
  [CATEGORIES_KEY]: categoriesReducer,
  [ALL_CATEGORIES_KEY]: getAllCategoriesReducer,
};
