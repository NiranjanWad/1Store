import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2";


@Injectable()
export class RechargeDetailsService {
  networkDetails: FirebaseListObservable<any[]>;


  constructor(private angFire: AngularFireDatabase){
    this.networkDetails = angFire.list('/TMobile');
    // console.log(this.ntwrkProvider);
  }

  getDetails(){
    return this.networkDetails;
  }
}
