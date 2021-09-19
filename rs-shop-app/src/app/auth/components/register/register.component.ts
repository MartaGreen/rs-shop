import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

const USER_DEFAULT_AVATAR =
  'https://okeygeek.ru/wp-content/uploads/2020/03/no_avatar.png';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnInit {
  constructor(private service: LoginService) {}

  ngOnInit(): void {}

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
      this.service.addUser(firstName.value, lastName.value, [], [], [], '');

      setTimeout(() => window.location.reload(), 0);
    }
  }
}
