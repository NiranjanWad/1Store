import {Injectable} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2";
@Injectable()
export class ElectricityProvidersService{
  electricityProviders: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){
    this.electricityProviders = database.list('/ElectricityProvidersList');
  }

  getElectricityProvidersNames(){
    return this.electricityProviders;
  }
}
