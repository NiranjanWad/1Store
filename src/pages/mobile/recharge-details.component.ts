import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";

/**
 * Created by Niranjan on 10/18/2017.
 */
@Component({
  selector: 'recharge-details',
  templateUrl: 'recharge-details.html'
})
export class RechargeDetailsComponent{
descArr = [
  {id:"$20",value:"2GB 4G data,validity 30 days"},
  {id:"$33",value:"6GB 4G data and unlimited 3G later,validity 30 days"},
  {id:"$35",value:"10GB 4B data and unlimited 3G later,validity 30 days"},
  {id:"$40",value:"6GB 4G data with India calling and unlimited 3G data,validity 30 days"},
  {id:"$45",value:"6GB 4G data with India calling and unlimited 3G data,validiy 30 days "},
  {id:"$50",value:"Unlimited 4G data, validity 30 days"}
];
constructor(public navCtrl: NavController, public navParams: NavParams){

}
}
