import { createAction, props } from '@ngrx/store';
import { ICategory } from '../models/goods-catalog.model';

export const getAllCategories = createAction('[GetAllCategories] Get all categories');
export const getAllCategoriesSuccess = createAction(
  '[GetAllCategories] Get all categories success',
  props<{ allCategories: ICategory[] }>(),
);
export const getAllCategoriesFail = createAction(
  '[GetAllCategories] Get all categories fail',
  props<{ err: Error }>(),
);

export const clearAllCategoriesAction = createAction(
  '[ClearCategories] Clear all categories',
);
