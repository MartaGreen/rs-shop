import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  user: IUser = this.service.getUsername();

  constructor(private service: LoginService) {}

  ngOnInit(): void {
    console.log(this.user);
  }

  openRegisterWindow() {
    const registerWindow: HTMLDivElement | null =
      document.querySelector('.register-window');
    registerWindow?.classList.add('opened');
    console.log(registerWindow);
  }

  logoutFunc() {
    this.service.rmUser();
    setTimeout(() => window.location.reload(), 0);
  }
}
