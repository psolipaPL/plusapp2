import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPage } from './search.page';
import { ProductPage } from '../product/product.page';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
  },
  {
    path: 'product',
    component: ProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchPageRoutingModule {}
