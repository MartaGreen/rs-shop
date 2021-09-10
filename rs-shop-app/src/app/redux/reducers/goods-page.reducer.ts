import { createReducer, on } from '@ngrx/store';
import * as goodsActions from '../actions/goods.page.action';
import { IGoods } from '../models/goods-page.model';

export const goodsInitialState: IGoods = {} as IGoods;

export const goodsReducer = createReducer(
  goodsInitialState,
  on(goodsActions.getGoodsAction, (state) => ({
    ...state,
  })),
  on(goodsActions.getGoodsSuccessAction, (state, { goodsArr }) => ({
    ...state,
    goods: goodsArr,
  })),
  on(goodsActions.getGoodsFailAction, (state, { err }) => ({
    ...state,
  })),
  on(goodsActions.clearGoodsAction, (state) => ({
    ...state,
    goods: [],
  })),
);
