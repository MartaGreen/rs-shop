import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { registerUserAction } from 'src/app/redux/actions/user.action';
import { IRegisterUserData } from 'src/app/redux/models/user.model';
import { registerSelector } from 'src/app/redux/selectors/user.selector';
import { LoginService } from '../../services/user.service';

const USER_DEFAULT_AVATAR =
  'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  token$ = this.store.select(registerSelector);
  userData?: IRegisterUserData;

  constructor(private service: LoginService, private store: Store) {}

  ngOnInit(): void {
    this.token$.subscribe((data) => {
      console.log('token is', data);

      if (data.token) {
        console.log('create user');
        setTimeout(
          () =>
            this.service.addUser(
              this.userData!.firstName,
              this.userData!.lastName,
              [],
              [],
              [],
              data.token!,
            ),
          0,
        );
      }
    });
  }

  closeRegisterWindow(windowElem: HTMLDivElement) {
    windowElem.classList.remove('opened');
  }

  createUserFunc(
    firstName: HTMLInputElement,
    lastName: HTMLInputElement,
    username: HTMLInputElement,
    password: HTMLInputElement,
    confirmation: HTMLInputElement,
  ) {
    firstName.classList.remove('warning');
    lastName.classList.remove('warning');
    confirmation.classList.remove('warning');
    password.classList.remove('warning');
    username.classList.remove('warning');

    if (!firstName.value) firstName.classList.add('warning');
    if (!lastName.value) lastName.classList.add('warning');
    if (!username.value) username.classList.add('warning');
    if (!password.value) password.classList.add('warning');
    if (!confirmation.value) confirmation.classList.add('warning');
    if (confirmation.value !== password.value) {
      confirmation.classList.add('warning');
      password.classList.add('warning');
    }

    if (!document.querySelector('.warning')) {
      const userData: IRegisterUserData = {
        firstName: firstName.value,
        lastName: lastName.value,
        login: username.value,
        password: password.value,
      };
      this.userData = userData;
      setTimeout(
        () => this.store.dispatch(registerUserAction({ userData: userData })),
        0,
      );
      // setTimeout(() => window.location.reload(), 0);
    }
  }
}
