import {Component, OnInit} from  "@angular/core";
import {RechargeDetailsService} from "./rechargeDetails.service";
import {FirebaseListObservable} from  "angularfire2";
import { NavParams } from 'ionic-angular';
@Component({
  selector: 'app-recharge-details',
  templateUrl: 'rechargeDetails.component.html',
  providers: [RechargeDetailsService]
})
export class RechargeDetailsComponent implements OnInit {
rechargeDetails: FirebaseListObservable<any[]>;
id: string;
constructor(private details: RechargeDetailsService, private  navParam: NavParams){}

ngOnInit(){
  this.id = this.navParam.get('param');
  this.rechargeDetails = this.details.getDetails(this.id);
}

}

