import { createReducer, on } from '@ngrx/store';
import { ISearchedCategories } from 'src/app/core/header/models/searched-data.model';
import * as categoriesActions from '../actions/get-categories.action';

export const categoriesInitialState: ISearchedCategories = {} as ISearchedCategories;

export const categoriesReducer = createReducer(
  categoriesInitialState,
  on(categoriesActions.getCategoriesAction, (state) => ({
    ...state,
  })),
  on(categoriesActions.getCategoriesSuccessAction, (state, { categoriesArr }) => ({
    ...state,
    categories: categoriesArr,
  })),
  on(categoriesActions.getCategoriesFailAction, (state, { err }) => ({
    ...state,
  })),
  on(categoriesActions.clearCategories, (state) => ({
    ...state,
    categories: [],
  })),
);
