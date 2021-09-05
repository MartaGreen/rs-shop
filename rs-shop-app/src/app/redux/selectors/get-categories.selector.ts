import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISearchedCategories } from 'src/app/core/models/searched-data.model';

export const CATEGORIES_KEY = 'categories';

const categories = createFeatureSelector<ISearchedCategories>(CATEGORIES_KEY);
export const categoriesSelector = createSelector(categories, (state) => state.categories);
