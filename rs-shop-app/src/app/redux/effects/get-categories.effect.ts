import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { SearchService } from 'src/app/core/header/services/search.service';
import {
  getCategoriesAction,
  getCategoriesSuccessAction,
} from '../actions/get-categories.action';

@Injectable()
export class categoriesEffect {
  categories$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(getCategoriesAction),
      switchMap(() =>
        this.service
          .sendGetCategoriesReq()
          .pipe(
            map((categoriesArr: any) => getCategoriesSuccessAction({ categoriesArr })),
          ),
      ),
    ),
  );

  constructor(private actions$: Actions, private service: SearchService) {}
}
