import { createAction, props } from '@ngrx/store';
import { ISearchedCategory } from 'src/app/core/models/searched-data.model';

export const getCategoriesAction = createAction('[GetCategories] get categories');
export const getCategoriesSuccessAction = createAction(
  '[GetCategories] get categories success',
  props<{ categoriesArr: ISearchedCategory[] }>(),
);
export const getCategoriesFailAction = createAction(
  '[GetCategories] get categories fail',
  props<{ err: Error }>(),
);
export const clearCategories = createAction('[ClearCategories] clear list of categories');
