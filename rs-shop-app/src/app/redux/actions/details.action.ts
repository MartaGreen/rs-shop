import { createAction, props } from '@ngrx/store';
import { IGood } from '../models/details.model';

export const detailsAction = createAction(
  '[GetDetails] Get details',
  props<{ itemId: string }>(),
);
export const detailsSuccessAction = createAction(
  '[GetDetails] Get details success',
  props<{ detailsData: IGood }>(),
);
export const detailsFailAction = createAction(
  '[GetDetails] Get details fail',
  props<{ err: Error }>(),
);
export const clearDetails = createAction('[ClearDetail] Clear details');
