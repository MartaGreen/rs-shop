import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GoodsService } from 'src/app/goods/services/goods.service';
import * as goodsActions from '../actions/goods.page.action';
import { IGood } from '../models/details.model';

@Injectable()
export class getSaleGoodsEffect {
  goods$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(goodsActions.getGoodsForSaleAction),
      switchMap(() =>
        this.service
          .sendGetAllSaleGoodsReq()
          .pipe(
            map((goodsForSaleArr: IGood[]) =>
              goodsActions.getGoodsForSaleSuccessAction({ goodsForSaleArr }),
            ),
          ),
      ),
    ),
  );

  constructor(private actions$: Actions, private service: GoodsService) {}
}
