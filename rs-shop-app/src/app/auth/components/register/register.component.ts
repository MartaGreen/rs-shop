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
    name: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    confirmation: HTMLInputElement,
  ) {
    name.classList.remove('warning');
    email.classList.remove('warning');
    confirmation.classList.remove('warning');
    password.classList.remove('warning');

    if (!name.value) name.classList.add('warning');
    if (!email.value) email.classList.add('warning');
    if (!password.value) password.classList.add('warning');
    if (!confirmation.value) confirmation.classList.add('warning');
    if (confirmation.value !== password.value) {
      confirmation.classList.add('warning');
      password.classList.add('warning');
    }

    if (!document.querySelector('.warning')) {
      // const avatar: any = document.querySelector('.avatar-input');
      // const url: string = avatar.files[0].name;
      // console.log(url);
      // this.service.addUser(name.value, email.value, password.value, USER_DEFAULT_AVATAR);

      setTimeout(() => window.location.reload(), 0);
    }
  }
}
