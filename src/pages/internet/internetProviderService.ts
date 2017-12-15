import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2";
@Injectable()
export class InternetProviderService{
  internetProviders: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase){
    this.internetProviders = this.db.list('/InternetProvidersList');
  }

  getInternetProviders(){
    return this.internetProviders;
  }
}
