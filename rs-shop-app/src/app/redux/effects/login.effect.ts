import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, throttleTime } from 'rxjs/operators';
import { LoginService } from 'src/app/auth/services/user.service';
import {
  getUsersAction,
  getUsersFailAction,
  getUsersSuccessAction
} from '../actions/user.action';

@Injectable()
export class LoginEffect {
  userData$ = createEffect((): any =>
    this.actions$.pipe(
      ofType(getUsersAction),
      throttleTime(1000),
      mergeMap((userLoginData: { login: string; password: string }) => {
        return this.service
          .sendUserLoginReq(userLoginData.login, userLoginData.password)
          .pipe(
            mergeMap((token) => {
              return this.service.sendGetUserDataReq(token.token).pipe(
                map((userData) => {
                  userData.token = token.token;
                  return getUsersSuccessAction({ userData: userData });
                }),
                catchError((err) => {
                  console.log('not authorized');
                  return of('err', err);
                }),
              );
            }),
            catchError((err) => {
              console.log('wrong password or login', err);
              const menu: HTMLUListElement | null = <HTMLUListElement>(
                document.querySelector('.account')?.querySelector('.dropdown-menu')
              );
              menu?.classList.add('show');
              document.querySelector('.wrong-data')?.classList.add('warning');
              menu
                .querySelectorAll('.form-input')
                .forEach((inp) => inp.classList.add('warning'));
              return of(getUsersFailAction(err));
            }),
          );
      }),
    ),
  );

  constructor(private actions$: Actions, private service: LoginService) {}
}
