import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGoods } from '../models/goods-page.model';

export const GOODS_KEY = 'goodsKey';

const saleGoodsFeatureSelector = createFeatureSelector<IGoods>(GOODS_KEY);
export const saleGoodsSelector = createSelector(
  saleGoodsFeatureSelector,
  (state) => state.saleGoods,
);
