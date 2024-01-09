import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  private productsAPI = 'https://productleague-dev.outsystems.app/ProductCore/rest/Product'
  constructor(private http: HttpClient) { }

  getProductData(sku:string):Observable<any>{
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: '0ae0b1c2-acda-48e5-83c4-21b3d26bb17e'
    })

    return this.http.get(`${this.productsAPI}/GetProductBySKU?SKU=${sku}`, {headers: headers })
  }
}
