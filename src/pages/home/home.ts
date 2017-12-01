import { Component } from '@angular/core';
import {NavController, ModalController, NavParams} from 'ionic-angular';
import {MobilePage} from "../mobile/mobile.component";
import { ElectricityPage } from '../electricity/electricity';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name: string;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public parm: NavParams) {
    this.name = parm.get(name);
  }

  openMobileForm(): void{
    this.navCtrl.push(MobilePage);
  }

  openElectricityForm(): void{
    this.navCtrl.push(ElectricityPage);
  }

}
