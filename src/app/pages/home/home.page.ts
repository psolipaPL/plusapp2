import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isApp= false;

  constructor(private platform: Platform) {
    this.initializeApp();
   }

   initializeApp(){
    this.platform.ready().then(()=>{
      if(this.platform.is('capacitor')){
        this.isApp = true;
      }
    })
   }
}
