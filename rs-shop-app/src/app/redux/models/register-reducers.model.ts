import { ISearchedCategories } from 'src/app/core/header/models/searched-data.model';
import { LOCATION_KEY } from '../selectors/action.selector';
import { CATEGORIES_KEY } from '../selectors/get-categories.selector';
import { ILocation } from './location';

export interface IRegisterReducers {
  [LOCATION_KEY]: ILocation;
  [CATEGORIES_KEY]: ISearchedCategories;
}
