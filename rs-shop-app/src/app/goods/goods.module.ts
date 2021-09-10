import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoodsCatalogComponent } from './components/goods-catalog/goods-catalog.component';
import { GoodsPageComponent } from './components/goods-page/goods-page.component';
import { GoodsRoutingModule } from './goods-routhing.module';
import { GoodsService } from './services/goods.service';

@NgModule({
  declarations: [GoodsCatalogComponent, GoodsPageComponent],
  imports: [CommonModule, GoodsRoutingModule],
  providers: [GoodsService],
})
export class GoodsModule {}
