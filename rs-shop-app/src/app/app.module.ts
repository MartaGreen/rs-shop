import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { GoodsModule } from './goods/goods.module';
import { AddToCartEffect } from './redux/effects/cart-add.effect';
import { DetailsEffect } from './redux/effects/details.effect';
import { categoriesEffect } from './redux/effects/get-categories.effect';
import { allCategoriesEffect } from './redux/effects/goods-catalog.effect';
import { getGoodsEffect } from './redux/effects/goods-page.effect';
import { SortEffect } from './redux/effects/goods-sort.effect';
import { LocationEffect } from './redux/effects/location.effect';
import { LoginEffect } from './redux/effects/login.effect';
import { RegisterEffect } from './redux/effects/register.effect';
import { getSaleGoodsEffect } from './redux/effects/sales.effect';
import { reducers } from './redux/reducers/register-reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot(reducers),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    EffectsModule.forRoot([
      LocationEffect,
      categoriesEffect,
      allCategoriesEffect,
      getGoodsEffect,
      DetailsEffect,
      SortEffect,
      getSaleGoodsEffect,
      LoginEffect,
      RegisterEffect,
      AddToCartEffect,
    ]),
    GoodsModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
