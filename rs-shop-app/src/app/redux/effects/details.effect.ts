import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GoodsService } from 'src/app/goods/services/goods.service';
import * as detailsActions from '../actions/details.action';
import { IGood } from '../models/details.model';

@Injectable()
export class DetailsEffect {
  details$ = createEffect((): any =>
    this.action$.pipe(
      ofType(detailsActions.detailsAction),
      switchMap((itemIdObj) =>
        this.service
          .sendGetGoodItem(itemIdObj.itemId)
          .pipe(
            map((detailsData: IGood) =>
              detailsActions.detailsSuccessAction({ detailsData }),
            ),
          ),
      ),
    ),
  );

  constructor(private service: GoodsService, private action$: Actions) {}
}
