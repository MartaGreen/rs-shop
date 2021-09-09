import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { GoodsCatalogService } from 'src/app/goods/services/goods-catalog.service';
import {
  getAllCategories,
  getAllCategoriesSuccess,
} from '../actions/goods-catalog.action';
import { ICategory } from '../models/goods-catalog.model';

@Injectable()
export class allCategoriesEffect {
  allCategories$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(getAllCategories),
      switchMap(() =>
        this.service
          .sendGetAllCategoriesReq()
          .pipe(
            map((allCategories: ICategory[]) =>
              getAllCategoriesSuccess({ allCategories }),
            ),
          ),
      ),
    ),
  );
  // allCategories$ = createEffect((): any => {
  //   this.actions$.pipe(
  //     ofType(getAllCategories),
  //     switchMap((): any =>
  //       this.service
  //         .sendGetAllCategoriesReq()
  //         .pipe(map((allCategories: any) => getAllCategoriesSuccess({ allCategories })));
  //     ),
  //   );
  // });

  constructor(private actions$: Actions, private service: GoodsCatalogService) {}
}
