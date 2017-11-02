import { Component } from '@angular/core';
import { NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {NetworkProviders} from "./NetworkProviders";
import {AngularFire, FirebaseListObservable} from "angularfire2"
import {RechargeDetailsComponent} from "./recharge-details.component"


/*
  Generated class for the Mobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.html'
})
export class MobilePage {
  imgPath: NetworkProviders[] = [
  { id: "1", name: "../assets/images/t-mobile.png"},
  { id: "2", name: "../assets/images/verizon.png"},
  { id: "3", name:"../assets/images/atandt.png"},
  { id: "4", name: "../assets/images/lyca.png"}
];

  public networkDetails: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public viewCtrl: ViewController, public afDatabase: AngularFire) {
    this.networkDetails = afDatabase.database.list('/Mobile');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilePage');
  }

  onSelect(imgId){
    this.networkDetails.subscribe((success) => {
      console.log(success);
      success.forEach( data => {
        //console.log("Key is", b.$key);
        if(data.$key === imgId){
          console.log("Niranjan",data);
          // this.navCtrl.push(RechargeDetailsComponent,data);
        }
      });
      this.navCtrl.push(RechargeDetailsComponent);
    });
  }

}


