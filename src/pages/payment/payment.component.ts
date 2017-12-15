import { Component,OnInit,HostListener } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PaymentService } from '../payment/paymentService';
import { stripeConfig } from '../../app/app.module';


/*
  Generated class for the PaymentPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
  providers:[PaymentService],
})
export class PaymentPage implements OnInit{
  handler: any;
  amount: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private paymentService: PaymentService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPagePage');
  }

  ngOnInit(){
    this.amount = this.navParams.get('param');
    this.handler = StripeCheckout.configure({
      key: stripeConfig.stripeKey,
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token : token => {
        this.paymentService.processPayment(token,(this.amount))
      }
    });

    this.handler.open({
      name: 'FireStarter',
      description: 'Deposit funds to Account',
      amount: (this.amount)
    });

  }

  @HostListener('window:popstate')
    onPopstate(){
    this.handler.close()
  }

}
