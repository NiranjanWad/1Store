import {Component, OnInit} from  "@angular/core";
import {RechargeDetailsService} from "./rechargeDetails.service";
import {FirebaseListObservable} from  "angularfire2";
import {NavParams, NavController} from 'ionic-angular';
import { PaymentPage } from '../payment/payment.component';
@Component({
  selector: 'app-recharge-details',
  templateUrl: 'rechargeDetails.component.html',
  providers: [RechargeDetailsService]
})
export class RechargeDetailsComponent implements OnInit {
rechargeDetails: FirebaseListObservable<any[]>;
id: string;
constructor(private details: RechargeDetailsService, private  navParam: NavParams,private  navCtrl: NavController){}

ngOnInit(){
  this.id = this.navParam.get('param');
  this.rechargeDetails = this.details.getDetails(this.id);
}

checkout(amount){
  this.navCtrl.push(PaymentPage,{param: amount*100});
}

}

