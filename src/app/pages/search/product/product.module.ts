import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { CommonComponents } from 'src/app/components/commoncomponents.module';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    CommonComponents
  ],
  declarations: [
    ProductPage,
    ProductDetailComponent
  ]
})
export class ProductPageModule {
}
