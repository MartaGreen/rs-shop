import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/redux/models/goods-catalog.model';
import { SERVER_ADDRESS } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class GoodsCatalogService {
  constructor(private http: HttpClient, private store: Store) {}

  sendGetAllCategoriesReq(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${SERVER_ADDRESS}/categories`);
  }
}
