import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GoodsService } from 'src/app/goods/services/goods.service';
import * as goodsActions from '../actions/goods.page.action';
import { IGood } from '../models/goods-page.model';

@Injectable()
export class getGoodsEffect {
  goods$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(goodsActions.getGoodsAction),
      switchMap((path) =>
        this.service
          .sendGetGoodsReq(path)
          .pipe(
            map((goodsArr: IGood[]) => goodsActions.getGoodsSuccessAction({ goodsArr })),
          ),
      ),
    ),
  );

  constructor(private actions$: Actions, private service: GoodsService) {}
}
