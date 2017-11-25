import {Injectable} from "@angular/core";
import {AngularFireDatabase, AngularFireAuth} from 'angularfire2';
@Injectable()
export class PaymentService{
  userId: string;

  constructor(private database: AngularFireDatabase, private afAuth: AngularFireAuth) {
     this.userId = this.afAuth.getAuth().auth.uid;
  }

  // save the token to firebase
  processPayment(token: any, amount){
     const payment = {token, amount};
    return this.database.list('/Payments/'+this.userId).push(payment);
  }

}
