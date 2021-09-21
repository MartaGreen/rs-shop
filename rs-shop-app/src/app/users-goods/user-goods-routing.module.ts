import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../shared/guards/logged-in.guard';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class UsersGoodsRoutingModule {}
