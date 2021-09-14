import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearDetails } from 'src/app/redux/actions/details.action';
import { clearGoodsAction } from 'src/app/redux/actions/goods.page.action';
import { IGood } from 'src/app/redux/models/details.model';
import { ICategory } from 'src/app/redux/models/goods-catalog.model';
import { SERVER_ADDRESS } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(private http: HttpClient, private store: Store) {}

  sendGetAllCategoriesReq(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${SERVER_ADDRESS}/categories`);
  }

  sendGetGoodsReq(path: string): Observable<IGood[]> {
    this.clearGoodsFunc();
    return this.http.get<IGood[]>(`${SERVER_ADDRESS}/goods/category${path}`);
  }

  sendGetGoodItem(itemId: string) {
    this.clearDetailsFunc();
    return this.http.get<IGood>(`${SERVER_ADDRESS}/goods/item/${itemId}`);
  }

  clearGoodsFunc() {
    this.store.dispatch(clearGoodsAction());
  }

  clearDetailsFunc() {
    this.store.dispatch(clearDetails());
  }

  // sortGoods(path: { path: string }, type: string): Observable<IGood[]> {
  //   this.clearGoodsFunc();
  //   const reqResult =  this.http.get<IGood[]>(`${SERVER_ADDRESS}/goods/category${path.path}`);

  //   if (type === 'price') {
  //     return reqResult.pipe(
  //       filter(goodsArr => goodsArr.)
  //     )
  //   }

  // }
}
