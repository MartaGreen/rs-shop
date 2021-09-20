import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoodsCatalogComponent } from './components/goods-catalog/goods-catalog.component';
import { GoodsDetailsComponent } from './components/goods-details/goods-details.component';
import { GoodsPageComponent } from './components/goods-page/goods-page.component';
import { SortComponent } from './components/goods-page/sort/sort.component';
import { GoodsRoutingModule } from './goods-routhing.module';
import { GoodsService } from './services/goods.service';
import { SalesGoodsComponent } from './components/sales-goods/sales-goods.component';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    GoodsCatalogComponent,
    GoodsPageComponent,
    GoodsDetailsComponent,
    SortComponent,
    SalesGoodsComponent,
    MainPageComponent,
  ],
  imports: [CommonModule, GoodsRoutingModule],
  providers: [GoodsService],
})
export class GoodsModule {}
