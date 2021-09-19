import { ISearchedCategories } from 'src/app/core/header/models/searched-data.model';
import { LOCATION_KEY } from '../selectors/action.selector';
import { DETAILS_KEY } from '../selectors/details.selector';
import { CATEGORIES_KEY } from '../selectors/get-categories.selector';
import { ALL_CATEGORIES_KEY } from '../selectors/goods-catalog.selector';
import { GOODS_KEY } from '../selectors/goods-page.selector';
import { ADD_TO_CART_KEY, LOGIN_KEY, REGISTER_KEY } from '../selectors/user.selector';
import { IDetails } from './details.model';
import { IAllCategories } from './goods-catalog.model';
import { IGoods } from './goods-page.model';
import { ILocation } from './location';
import { IUserInitialState } from './user.model';

export interface IRegisterReducers {
  [LOCATION_KEY]: ILocation;
  [CATEGORIES_KEY]: ISearchedCategories;
  [ALL_CATEGORIES_KEY]: IAllCategories;
  [GOODS_KEY]: IGoods;
  [DETAILS_KEY]: IDetails;
  [LOGIN_KEY]: IUserInitialState;
  [REGISTER_KEY]: { token: string };
  [ADD_TO_CART_KEY]: IUserInitialState;
}
