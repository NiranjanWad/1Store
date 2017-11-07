import {Component, OnInit} from  "@angular/core";
import {RechargeDetailsService} from "./rechargeDetails.service";
import {FirebaseListObservable} from  "angularfire2";
@Component({
  selector: 'app-recharge-details',
  templateUrl: 'rechargeDetails.component.html',
  providers: [RechargeDetailsService]
})
export class RechargeDetailsComponent implements OnInit {
rechargeDetails: FirebaseListObservable<any[]>;

constructor(private details: RechargeDetailsService){}

ngOnInit(){
  this.rechargeDetails = this.details.getDetails();
}

}

