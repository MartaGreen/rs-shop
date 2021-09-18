import { createAction, props } from '@ngrx/store';
import { IGood } from '../models/details.model';

export const getGoodsAction = createAction(
  '[GetGoods] get goods',
  props<{ path: string }>(),
);
export const getGoodsSuccessAction = createAction(
  '[GetGoods] get goods success',
  props<{ goodsArr: IGood[] }>(),
);
export const getGoodsFailAction = createAction(
  '[GetGoods] get goods',
  props<{ err: Error }>(),
);

export const clearGoodsAction = createAction('[ClearGoods] Clear goods');

export const goodsSortAction = createAction(
  '[GoodsSort] Goods sorting',
  props<{ sortType: string; path: string; flag: boolean }>(),
);
export const goodsSortSuccessAction = createAction(
  '[GoodsSort] Goods sorting success',
  props<{ sortedGoods: IGood[] }>(),
);
export const goodsSortFailAction = createAction(
  '[GoodsSort] Goods sorting',
  props<{ err: Error }>(),
);

export const getGoodsForSaleAction = createAction('[GoodsInSale] Get goods for sale');
export const getGoodsForSaleSuccessAction = createAction(
  '[GoodsInSale] Get goods for sale success',
  props<{ goodsForSaleArr: IGood[] }>(),
);
export const getSalesGoodsFailAction = createAction(
  '[GoodsInSale] Get getGoodsForSaleAction for sale fail',
  props<{ err: Error }>(),
);
