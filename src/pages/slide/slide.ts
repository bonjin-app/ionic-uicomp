import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"slidePage"})
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {
  private images = [
      {src:"../assets/imgs/top-image-01.jpg", title : "top-image-01", subTitle : "image-01"},
      {src:"../assets/imgs/top-image-02.jpg", title : "top-image-02", subTitle : "image-02"},
      {src:"../assets/imgs/top-image-03.jpg", title : "top-image-03", subTitle : "image-03"},
      {src:"../assets/imgs/top-image-04.jpg", title : "top-image-04", subTitle : "image-04"},
      {src:"../assets/imgs/top-image-05.jpg", title : "top-image-05", subTitle : "image-05"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

}
