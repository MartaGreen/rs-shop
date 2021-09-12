import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsCatalogComponent } from './components/goods-catalog/goods-catalog.component';
import { GoodsDetailsComponent } from './components/goods-details/goods-details.component';
import { GoodsPageComponent } from './components/goods-page/goods-page.component';

const routes: Routes = [
  { path: 'catalog', component: GoodsCatalogComponent },
  { path: 'goods/category/:categoryId/:subCategoryId', component: GoodsPageComponent },
  { path: 'goods/item/:itemId', component: GoodsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {}
