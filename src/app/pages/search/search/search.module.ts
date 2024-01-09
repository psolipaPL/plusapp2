import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { ProductListComponent } from 'src/app/components/product-list/product-list.component';
import { CommonComponents } from 'src/app/components/commoncomponents.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    CommonComponents
  ],
  declarations: [
    SearchPage,
    ProductListComponent
  ]
})
export class SearchPageModule {
}
