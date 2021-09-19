import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsersAction } from 'src/app/redux/actions/user.action';
import { IUserInitialState } from 'src/app/redux/models/user.model';
import { loginSelector } from 'src/app/redux/selectors/user.selector';
import { LoginService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  user: IUserInitialState = this.service.getUsername();
  userData$ = this.store.select(loginSelector);
  userData?: IUserInitialState;

  constructor(private service: LoginService, private store: Store) {}

  ngOnInit(): void {
    this.userData$.subscribe((data: { userData: IUserInitialState }) => {
      this.userData = data.userData;
      this.service.addUser(
        data.userData?.firstName,
        data.userData?.lastName,
        data.userData?.cart,
        data.userData?.favorites,
        data.userData?.orders,
        data.userData?.token,
      );
    });

    console.log(this.user);
  }

  openRegisterWindow() {
    const registerWindow: HTMLDivElement | null =
      document.querySelector('.register-window');
    registerWindow?.classList.add('opened');
  }

  logoutFunc() {
    this.service.rmUser();
    setTimeout(() => window.location.reload(), 0);
  }

  loginFunc(login: HTMLInputElement, password: HTMLInputElement) {
    if (!login.value) console.log('not login');
    else if (!password.value) console.log('not password');
    else {
      this.store.dispatch(
        getUsersAction({ login: login.value, password: password.value }),
      );
      // setTimeout(() => window.location.reload(), 0);
    }
  }
}
