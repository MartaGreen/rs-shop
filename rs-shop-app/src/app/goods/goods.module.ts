import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GoodsCatalogComponent } from './components/goods-catalog/goods-catalog.component';
import { GoodsRoutingModule } from './goods-routhing.module';
import { GoodsCatalogService } from './services/goods-catalog.service';

@NgModule({
  declarations: [GoodsCatalogComponent],
  imports: [CommonModule, GoodsRoutingModule],
  providers: [GoodsCatalogService],
})
export class GoodsModule {}
