import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartComponent } from './components/cart/cart.component';
import { UsersGoodsRoutingModule } from './user-goods-routing.module';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, UsersGoodsRoutingModule],
})
export class UsersGoodsModule {}
