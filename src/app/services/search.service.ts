import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private productsAPI = 'https://productleague-dev.outsystems.app/ProductCore/rest/Product'
  constructor(private http: HttpClient) { }

  getData(limit:number, offset:number):Observable<any>{
    const headers: HttpHeaders = new HttpHeaders({
      Authorization: '0ae0b1c2-acda-48e5-83c4-21b3d26bb17e'
    })

    return this.http.get(`${this.productsAPI}/GetProducts?Limit=${limit}&&Offset=${offset}`, {headers: headers })
  }
}