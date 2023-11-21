import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  sku: any;

  constructor(private route: ActivatedRoute, private location: Location) { 
    this.sku = this.route.snapshot.paramMap.get('sku')
  }

  ngOnInit() {
  }

  navigateBack():void{
    this.location.back();
  }

}
