import { ActionReducerMap } from '@ngrx/store';
import { IRegisterReducers } from '../models/register-reducers.model';
import { LOCATION_KEY } from '../selectors/action.selector';
import { DETAILS_KEY } from '../selectors/details.selector';
import { CATEGORIES_KEY } from '../selectors/get-categories.selector';
import { ALL_CATEGORIES_KEY } from '../selectors/goods-catalog.selector';
import { GOODS_KEY } from '../selectors/goods-page.selector';
import { ADD_TO_CART_KEY, LOGIN_KEY, REGISTER_KEY } from '../selectors/user.selector';
import { getAllCategoriesReducer } from './action-catalog.reducer';
import { detailsReducer } from './details.reducer';
import { categoriesReducer } from './get-categories.reducer';
import { goodsReducer } from './goods-page.reducer';
import { locationReducer } from './location.reducer';
import { addToCartReducer, getUserReducer, registerUserReducer } from './user.reducer';

export const reducers: ActionReducerMap<IRegisterReducers> = {
  [LOCATION_KEY]: locationReducer,
  [CATEGORIES_KEY]: categoriesReducer,
  [ALL_CATEGORIES_KEY]: getAllCategoriesReducer,
  [GOODS_KEY]: goodsReducer,
  [DETAILS_KEY]: detailsReducer,
  [LOGIN_KEY]: getUserReducer,
  [REGISTER_KEY]: registerUserReducer,
  [ADD_TO_CART_KEY]: addToCartReducer,
};
