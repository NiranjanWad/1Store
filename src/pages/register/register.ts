import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from  'angularfire2';
import {AlertController} from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { HomePage } from "../home/home"
 /*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  loginUser: FirebaseListObservable<any>;
  customerDetails = {name: "",username: "",password: "",city: "", state: "", country: "", zipcode: ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, angFire: AngularFire, public alertCtrl: AlertController, public modalCtr: ModalController) {
    this.loginUser =angFire.database.list('/Customer');
}

  ionViewDidLoad(){
    console.log('ionViewDidLoad RegisterPage');
  }

  saveData(): void {

    if (this.customerDetails.name != "" && this.customerDetails.username != "" && this.customerDetails.password !=""
      && this.customerDetails.city != "" && this.customerDetails.state !="" && this.customerDetails.country != ""
      && this.customerDetails.zipcode != "") {
      this.loginUser.push({
        name: this.customerDetails.name,
        username: this.customerDetails.username,
        password: this.customerDetails.password,
        city: this.customerDetails.city,
        state: this.customerDetails.state,
        country: this.customerDetails.country,
        zipcode: this.customerDetails.zipcode
      });
      let modal = this.modalCtr.create(HomePage);
      modal.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: "Incomplete data",
        message: "Please fill out all the information",
        buttons: ["OK"]
      });
      alert.present();
    }
  }
}

