import {Component, OnInit} from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {FirebaseListObservable, AngularFireDatabase} from "angularfire2";
import {ElectricityProvidersService} from '../electricity/electricityProvidersService';
import {CheckoutPage} from '../electricity/checkout.component';

@Component({
  selector: 'page-electricity',
  templateUrl: 'electricity.html',
  providers:[ElectricityProvidersService]
})
export class ElectricityPage implements OnInit{

  electricityProviderNames: FirebaseListObservable<any[]>;
 // billDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,private electricity: ElectricityProvidersService, private database: AngularFireDatabase) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectricityPagePage');
  }

  ngOnInit() {
    this.electricityProviderNames = this.electricity.getElectricityProvidersNames();
  }

  getBillDetails(elecProviders, consumNum){
    console.log(elecProviders);
      this.database.list('/ElectricityProviders/'+elecProviders+'/consumerNumber/'+consumNum).subscribe((data) => {
        console.log(data);
      if(data.length != 0){
        this.navCtrl.push(CheckoutPage,{param1:data[0].billAmount,param2:consumNum});
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
