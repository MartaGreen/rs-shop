import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGoods } from '../models/goods-page.model';

export const GOODS_KEY = 'goodsKey';

const goodsSelectorFeature = createFeatureSelector<IGoods>(GOODS_KEY);
export const goodsSelector = createSelector(goodsSelectorFeature, (state) => state.goods);
