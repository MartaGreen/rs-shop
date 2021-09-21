import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GoodsService } from 'src/app/goods/services/goods.service';
import { goodsSortAction, goodsSortSuccessAction } from '../actions/goods.page.action';

@Injectable()
export class SortEffect {
  sort$ = createEffect((): any =>
    this.action$.pipe(
      ofType(goodsSortAction),
      switchMap((reqData) =>
        this.service.sendGetGoodsReq(reqData.path).pipe(
          map((goods) =>
            goods.sort((next, prev) => {
              if (reqData.sortType === 'price')
                return reqData.flag ? next.price - prev.price : prev.price - next.price;
              if (reqData.sortType === 'rating')
                return reqData.flag
                  ? prev.rating - next.rating
                  : next.rating - prev.rating;
              else return 0;
            }),
          ),
          map((sortedGoods) => goodsSortSuccessAction({ sortedGoods })),
        ),
      ),
    ),
  );
  constructor(private action$: Actions, private service: GoodsService) {}
}
