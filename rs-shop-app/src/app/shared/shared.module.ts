import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginWarnComponent } from './components/login-warn/login-warn.component';

@NgModule({
  declarations: [LoginWarnComponent],
  imports: [CommonModule],
  exports: [LoginWarnComponent],
})
export class SharedModule {}
