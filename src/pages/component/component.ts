import {Component} from '@angular/core';
import {
  ActionSheetController, AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams,
  Platform, ToastController
} from 'ionic-angular';
import {SlidePage} from "../slide/slide";
import {AccountInterface} from "../../interface/account";
import {NavPage} from "../nav/nav";
import {LoaderProvider} from "../../providers/loader/loader";

/**
 * Generated class for the ComponentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name: "componentPage"})
@Component({
  selector: 'page-component',
  templateUrl: 'component.html',
})
export class ComponentPage {

  private accountData = {} as AccountInterface;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public actCtrl: ActionSheetController,
              public platform: Platform,
              public modCtrl: ModalController,
              public alertCtrl: AlertController,
              public toastCtrl : ToastController,
              public loadingCtrl : LoaderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComponentPage');
  }

  actionSheet() {
    let actionSheet = this.actCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: !this.platform.is('ios') ? 'trash' : null,
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play',
        icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: !this.platform.is('ios') ? 'heart-outline' : null,
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel', // will always sort to be on the bottom
        icon: !this.platform.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    actionSheet.present();
  }

  fnModal() {
    let letModal = this.modCtrl.create("modalPage");
    letModal.onDidDismiss(data => console.log(data));
    letModal.present();
  }

  slide() {
    this.navCtrl.push("slidePage");
  }

  promptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과E-Mail를입력하세요",
      inputs: [{name: 'name', placeholder: 'Name 입력„' },
               {name: 'email', placeholder: 'Email 입력„'}],
      buttons: [{text: '취소', handler: data => {console.log('Cancel clicked');}},
                {text: '저장', handler: data => {this.accountData = {name: data.name, email: data.email}
                                                 this.navCtrl.push('NavPage', {account: this.accountData});}
                }]
    });
    prompt.present();
  };

  toast(){
    let toast = this.toastCtrl.create({
      message : "Toast Controller",
      duration : 3000,
      position : "bottom"
    });
    toast.onDidDismiss(() => console.log("Toast 사라짐"));
    toast.present();
  }


  loading(){
    this.loadingCtrl.show();

    setTimeout(() => {
      this.loadingCtrl.hide();
    }, 3000);
  }
}
