import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PaymentHistoryServiceProvider} from "./paymentHistoryServiceProvider";

/*
  Generated class for the PaymentHistoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment-history',
  templateUrl: 'payment-history.html',
  providers: [PaymentHistoryServiceProvider]
})
export class PaymentHistoryPage {
   // private amount: any;
   // private card: any;
   private details: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private payment: PaymentHistoryServiceProvider) {
    this.payment.getPaymentRecords().subscribe((resp) => {
      this.details = resp;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentHistoryPagePage');
  }

}
