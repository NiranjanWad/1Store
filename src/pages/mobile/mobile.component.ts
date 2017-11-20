import {Component} from '@angular/core';
import { NavController, NavParams,ViewController,ModalController } from 'ionic-angular';
import {RechargeDetailsComponent} from "./rechargeDetails.component";




/*
  Generated class for the Mobile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mobile',
  templateUrl: 'mobile.component.html'
})
export class MobilePage{
  storeId: string;
  imgPath  = [
    { id: "TMobile", name: "../assets/images/t-mobile.png"},
    { id: "Verizon", name: "../assets/images/verizon.png"},
    { id: "AT&T", name:"../assets/images/atandt.png"},
    { id: "Lyca", name: "../assets/images/lyca.png"}
  ];



   // public networkDetails: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController, public viewCtrl: ViewController) {
   }


  onSelect(imgId){
      this.storeId = imgId;
      this.navCtrl.push(RechargeDetailsComponent,{param: this.storeId});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilePage');
  }



}


