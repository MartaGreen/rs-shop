import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { LoginService } from 'src/app/auth/services/user.service';
import { addToCartAction, addToCartSuccessAction } from '../actions/user.action';

@Injectable()
export class AddToCartEffect {
  userData$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(addToCartAction),
      mergeMap((id) =>
        this.service
          .sendAddToCartReq(id.id)
          .pipe(map((data) => addToCartSuccessAction({ cartItem: id.id }))),
      ),
    ),
  );

  constructor(private actions$: Actions, private service: LoginService) {}
}
