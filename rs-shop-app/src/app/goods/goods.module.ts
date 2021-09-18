import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoodsCatalogComponent } from './components/goods-catalog/goods-catalog.component';
import { GoodsDetailsComponent } from './components/goods-details/goods-details.component';
import { GoodsPageComponent } from './components/goods-page/goods-page.component';
import { SortComponent } from './components/goods-page/sort/sort.component';
import { GoodsRoutingModule } from './goods-routhing.module';
import { GoodsService } from './services/goods.service';

@NgModule({
  declarations: [
    GoodsCatalogComponent,
    GoodsPageComponent,
    GoodsDetailsComponent,
    SortComponent,
  ],
  imports: [CommonModule, GoodsRoutingModule],
  providers: [GoodsService],
})
export class GoodsModule {}
