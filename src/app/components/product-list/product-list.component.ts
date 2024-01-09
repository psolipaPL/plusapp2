import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent  implements OnInit {
@Input() isApp:boolean = false;
  constructor(private navCtrl: NavController, private productsApi: SearchService, private router:Router) { }
  productsData: any;

  lm = 20;
  off = 0;

  loadData(event:any){
    console.log(event)
    this.productsApi.getData(this.lm, this.off).subscribe((data) => {
      this.productsData = this.productsData.concat(data)
      console.log(this.productsData)
    })
    this.off+=20;
    event.target.complete()
  }

  ngOnInit() {
    this.productsApi.getData(this.lm, this.off).subscribe((data) => {
      this.productsData = data;
    })
  }

  goToDetails(sku:string){
    this.navCtrl.navigateForward(`/product/${sku}`)
  }

  navigateToProduct(sku:string){
    this.router.navigate(['product', sku])
  }
}
