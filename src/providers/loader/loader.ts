import { Injectable } from '@angular/core';
import {LoadingController} from "ionic-angular";

/*
  Generated class for the LoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaderProvider {

  private loading:any;

  constructor(public loadingCtrl : LoadingController,) {
    console.log('Hello LoaderProvider Provider');
  }


  show(){
    this.loading = this.loadingCtrl.create({
      content:"잠시만 기다려 주세요."
    });
    this.loading.present();
  }

  hide(){
    this.loading.dismiss();
  }
}
