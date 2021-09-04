import { createAction, props } from '@ngrx/store';

export const getLocation = createAction('[Location] Find user location');

export const getLocationSuccess = createAction(
  '[Location] Find user location success',
  props<{ city: any }>(),
);

export const getLocationFail = createAction(
  '[Location] Find user location fail',
  props<{ err: Error }>(),
);
