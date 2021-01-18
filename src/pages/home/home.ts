import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items = [
    {id:1, name:"첫번째 Item"}
  ];
  disabledSwitch = false;
  userName:any;

  constructor(public navCtrl: NavController) {
    //this.userName = "아이오닉";
  }

  itemSeleted(item){
    if(item.id == 1){
      this.navCtrl.push("componentPage");
    }
    //alert(item.id + " - " + item.name);
  }

  myButton(event){
    if (this.userName != undefined && this.userName != "") {
      this.navCtrl.push("bindPage", {name:this.userName});
      console.log(event.target.textContent + "-" + event.clientX + "-" + event.clientY);
    }else{
      alert("userName 을 입력해주세요.");
    }
  }

  loginButton(event){
    this.navCtrl.push("loginPage");
  }

  ionViewDidLoad(){
    console.log("1")
  }

  ionViewWillEnter(){
    console.log("2")
  }

  ionViewWillUnload(){
    console.log("3")
  }
}
