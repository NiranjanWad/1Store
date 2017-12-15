import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,MenuController, LoadingController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {AngularFire,FirebaseListObservable}from 'angularfire2';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register'
import { Facebook } from 'ionic-native';
import {Data} from "../../providers/data";
import {AuthProviders, AuthMethods} from 'angularfire2';
import {TabsPage} from "../tabs/tabs";
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
loginUser: FirebaseListObservable<any>;
loading: any;
email:any;
password: any;
  customerDetails = {username: "",password: "" };
  constructor(public menu: MenuController,public navCtrl: NavController,public modalCtr: ModalController, public navParams: NavParams,public alertCtrl: AlertController,public angFire: AngularFire, public dataService: Data, public loadingCtrl: LoadingController) {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    })
    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() : void{
    this.loading.present();
    Facebook.login(['public_profile']).then((response) =>{
      this.getProfile();
      this.navCtrl.push(HomePage, {
        name: this.dataService.username
      });
    },
      (err) =>{
      let alert= this.alertCtrl.create({
        title: 'Oops!',
        subTitle: 'Something went wrong, please try again later.',
        buttons: ['Ok']
      });
      this.loading.dismiss();
        alert.present();
      });

  }

  getProfile(): void{
    Facebook.api('/me?fields=id,name,picture', ['public_profile']).then(
      (response) =>{
        console.log(response);
        this.dataService.fbid = response.id;
        this.dataService.username = response.name;
        this.dataService.picture = response.picture.data.url;
        this.loginUser.push({
          username: response.name,
          password: response.id,
        });

        this.menu.enable(true);
        this.loading.dismiss();
        this.navCtrl.setRoot(HomePage);

      },
      (err) => {
        console.log(err);
        let alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Something went wrong, please try again later.',
          buttons: ['Ok']
        });
        this.loading.dismiss();
        alert.present();
      }
    );

  }

  registerUser(): void{
    let modal = this.modalCtr.create(RegisterPage);
    modal.present();
  }


  loginNormal(): void {

    if (!(this.customerDetails.username != "" && this.customerDetails.password != "")){
      let alert = this.alertCtrl.create({
        title: "Incomplete data",
        message: "Please enter username and password",
        buttons: ["OK"]
      });
    alert.present();
  }
  else {
      this.angFire.auth.login({
        email: this.customerDetails.username,
        password: this.customerDetails.password
      }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((response) => {
        console.log('Login success' + JSON.stringify(response));
        let currentUser = {
          email: response.auth.email,
          picture: response.auth.photoURL
        };
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
        let modal = this.modalCtr.create(TabsPage);
        modal.present();
      }).catch((error) => {
        let alert = this.alertCtrl.create({
          title: "Incorrect data",
          message: "Username and password combination does not exist",
          buttons: ["OK"]
        });
        alert.present();
        console.log(error);
      });
    }
  }


}
