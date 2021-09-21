import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IDetails } from '../models/details.model';

export const DETAILS_KEY = 'detailsKey';

const detailsFeatureSelector = createFeatureSelector<IDetails>(DETAILS_KEY);
export const detailsSelector = createSelector(detailsFeatureSelector, (state) => state);
