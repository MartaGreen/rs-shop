import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GoodsModule } from './goods/goods.module';
import { categoriesEffect } from './redux/effects/get-categories.effect';
import { allCategoriesEffect } from './redux/effects/goods-catalog.effect';
import { LocationEffect } from './redux/effects/location.effect';
import { reducers } from './redux/reducers/register-reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot(reducers),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    EffectsModule.forRoot([LocationEffect, categoriesEffect, allCategoriesEffect]),
    GoodsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
