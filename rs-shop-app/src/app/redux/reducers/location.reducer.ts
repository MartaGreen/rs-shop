import { createReducer, on } from '@ngrx/store';
import * as locationActions from '../actions/location.action';
import { ILocation } from '../models/location';

export const locationInitialState: ILocation = {
  city: 'Не определено',
};

export const locationReducer = createReducer(
  locationInitialState,
  on(locationActions.getLocation, (state) => ({
    ...state,
  })),
  on(locationActions.getLocationSuccess, (state, { city }) => ({
    ...state,
    city: city,
  })),
  on(locationActions.getLocationFail, (state, { err }) => ({
    ...state,
  })),
);
