import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodsCatalogComponent } from './components/goods-catalog/goods-catalog.component';

const routes: Routes = [{ path: 'catalog', component: GoodsCatalogComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {}
