import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
   responseData: any;

   constructor(private productsApi: SearchService){}
 
   ngOnInit() {
     this.productsApi.getData().subscribe((data) => {
       this.responseData = data
     })
   }

}
