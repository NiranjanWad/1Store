import {Injectable} from "@angular/core";
import {AngularFireAuth, AngularFireDatabase} from "angularfire2";
@Injectable()
export class PaymentHistoryServiceProvider{
  private userId: string;
  constructor(private db: AngularFireDatabase, private angFireAuth: AngularFireAuth){
    this.userId = angFireAuth.getAuth().auth.uid;
  }

  getPaymentRecords(){
    return this.db.list('/Payments/'+this.userId);
  }
}
