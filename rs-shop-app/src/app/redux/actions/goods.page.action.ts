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
