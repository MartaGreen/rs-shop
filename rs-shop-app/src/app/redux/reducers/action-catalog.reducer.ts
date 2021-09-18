import { createReducer, on } from '@ngrx/store';
import {
  clearAllCategoriesAction,
  getAllCategories,
  getAllCategoriesFail,
  getAllCategoriesSuccess,
} from '../actions/goods-catalog.action';
import { IAllCategories } from '../models/goods-catalog.model';

export const allCategoriesInitialState: IAllCategories = {} as IAllCategories;

export const getAllCategoriesReducer = createReducer(
  allCategoriesInitialState,
  on(getAllCategories, (state) => ({
    ...state,
  })),
  on(getAllCategoriesSuccess, (state, { allCategories }) => ({
    ...state,
    allCategories: allCategories,
  })),
  on(getAllCategoriesFail, (state, { err }) => ({
    ...state,
  })),
  on(clearAllCategoriesAction, (state) => ({
    ...state,
    allCategories: [],
  })),
);
