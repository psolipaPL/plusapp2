import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private productsAPI = 'https://41ece4ee-ba27-4bca-bc80-61a48ae6b099.mock.pstmn.io'
  constructor(private http: HttpClient) { }
  getData():Observable<any>{
    return this.http.get(`${this.productsAPI}/badjoras`)
  }
}
