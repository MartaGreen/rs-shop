import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { LocationService } from 'src/app/core/header/services/location.service';
import { getLocation, getLocationSuccess } from '../actions/location.action';

@Injectable()
export class LocationEffect {
  location$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(getLocation),
      switchMap(() =>
        this.service.sendLocationReq().pipe(map((city) => getLocationSuccess({ city }))),
      ),
    ),
  );

  constructor(private actions$: Actions, private service: LocationService) {}
}
