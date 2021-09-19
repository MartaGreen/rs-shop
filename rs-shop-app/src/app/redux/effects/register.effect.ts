import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { LoginService } from 'src/app/auth/services/user.service';
import {
  registerUserAction,
  registerUserFailAction,
  registerUserSuccessAction,
} from '../actions/user.action';

@Injectable()
export class RegisterEffect {
  registerUser$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(registerUserAction),
      mergeMap((userData) =>
        this.service
          .sendRegisterUserReq(userData.userData)
          .pipe(map((token) => registerUserSuccessAction(token))),
      ),
      catchError((err) => of(registerUserFailAction(err))),
    ),
  );

  constructor(private actions$: Actions, private service: LoginService) {}
}
