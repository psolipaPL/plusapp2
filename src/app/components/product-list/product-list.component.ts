import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  implements OnInit {
@Input() productsData:any;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  ngAfterViewInit(){
  }

  goToDetails(sku:string){
    this.navCtrl.navigateForward(`/product/${sku}`)
  }
}
