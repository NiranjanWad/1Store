import {Component, OnInit} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {InternetProviderService} from "./internetProviderService";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2";
import {CheckoutPage} from "../electricity/checkout.component";

/*
  Generated class for the InternetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-internet',
  templateUrl: 'internet.html',
  providers: [InternetProviderService]
})
export class InternetPage implements OnInit{
  internetProviders: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private internetProviderService: InternetProviderService,private database: AngularFireDatabase, private alertCtrl: AlertController) {

  }

  ngOnInit(){
    this.internetProviders = this.internetProviderService.getInternetProviders();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InternetPagePage');
  }
  getBillDetails(netProviders, accNum){
    console.log(netProviders);
    this.database.list('/InternetProviders/'+netProviders+'/accountNumber/'+accNum).subscribe((data) => {
      console.log(data);
      if(data.length != 0){
        this.navCtrl.push(CheckoutPage,{param1:data[0].billAmount,param2:accNum});
      }
      else{
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Please enter a valid Consumer Number',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

}
