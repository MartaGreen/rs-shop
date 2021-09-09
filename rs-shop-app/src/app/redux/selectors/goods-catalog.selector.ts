import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAllCategories } from '../models/goods-catalog.model';

export const ALL_CATEGORIES_KEY = 'getAllCategories';

const allCategoriesSelectorFeature =
  createFeatureSelector<IAllCategories>(ALL_CATEGORIES_KEY);
export const allCategoriesSelector = createSelector(
  allCategoriesSelectorFeature,
  (state) => state.allCategories,
);
