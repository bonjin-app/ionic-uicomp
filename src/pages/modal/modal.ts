import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:"modalPage"})
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  private profile = {
    actionSwitch : false,
    name : "",
    gender : "",
    domestic : "",
    startDate : ""
  };

  constructor(public navCtrl: NavController
              , public navParams: NavParams
              , public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  fnClose(){
    this.viewCtrl.dismiss();
    //this.navCtrl.pop();
  }

  fnSave(){
    this.viewCtrl.dismiss(this.profile);
  }


}
