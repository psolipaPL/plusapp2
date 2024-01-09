import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from 'src/app/services/product-detail.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {

  constructor(private productApi: ProductDetailService, private route: ActivatedRoute) { }
  productData: any;


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productApi.getProductData(params['sku']).subscribe((data:any) => {
        this.productData = data;
      })
    })
  }

}
