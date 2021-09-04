import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILocation } from '../models/location';

export const LOCATION_KEY = 'location';

const location = createFeatureSelector<ILocation>(LOCATION_KEY);
export const locationSelector = createSelector(location, (state) => state.city);
