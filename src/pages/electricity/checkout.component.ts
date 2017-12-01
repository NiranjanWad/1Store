import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaymentPage} from "../payment/payment.component";

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.component.html',

})
export class CheckoutPage{
  billAmt: any;
  consumerNum: any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.billAmt = this.navParams.get('param1');
    this.consumerNum = this.navParams.get('param2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ElectricityPagePage');
  }

  pay(billAmt){
    this.navCtrl.push(PaymentPage,{param: billAmt});
  }


}
