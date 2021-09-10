import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearGoodsAction } from 'src/app/redux/actions/goods.page.action';
import { ICategory } from 'src/app/redux/models/goods-catalog.model';
import { IGood } from 'src/app/redux/models/goods-page.model';
import { SERVER_ADDRESS } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(private http: HttpClient, private store: Store) {}

  sendGetAllCategoriesReq(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${SERVER_ADDRESS}/categories`);
  }

  sendGetGoodsReq(path: { path: string }): Observable<IGood[]> {
    this.clearGoodsFunc();
    console.log('path', path);
    return this.http.get<IGood[]>(`${SERVER_ADDRESS}/goods/category${path.path}`);
  }

  clearGoodsFunc() {
    this.store.dispatch(clearGoodsAction());
  }
}
