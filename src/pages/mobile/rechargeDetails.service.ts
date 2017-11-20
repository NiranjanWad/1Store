import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2";


@Injectable()
export class RechargeDetailsService {
  networkDetails: FirebaseListObservable<any[]>;


  constructor(private angFire: AngularFireDatabase){

  }

  getDetails(id){
    this.networkDetails = this.angFire.list('/'+id);
    console.log("Niranjan#####"+this.networkDetails);
    return this.networkDetails;
  }
}
