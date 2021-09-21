import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { getLocation } from 'src/app/redux/actions/location.action';
import { locationSelector } from 'src/app/redux/selectors/action.selector';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  location$ = this.store.select(locationSelector);

  constructor(private http: HttpClient, private store: Store) {}

  sendLocationReq() {
    return this.http.get(`http://ip-api.com/json`).pipe(map((obj: any) => obj.city));
  }
  getLocationFunc() {
    this.store.dispatch(getLocation());
    return this.location$;
  }
}
