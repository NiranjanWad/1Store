import {Component, OnInit} from  "@angular/core";
import {RechargeDetailsService} from "./rechargeDetails.service";
import {FirebaseListObservable} from  "angularfire2";
import {AlertController} from 'ionic-angular';
@Component({
  selector: 'app-recharge-details',
  templateUrl: 'rechargeDetails.component.html',
  providers: [RechargeDetailsService]
})
export class RechargeDetailsComponent implements OnInit {
  mobile:string;
  

rechargeDetails: FirebaseListObservable<any[]>;

constructor(public details: RechargeDetailsService ,public alertCtrl:AlertController) {
  
}
ngOnInit(){
  this.rechargeDetails = this.details.getDetails();
}
onSubmit(){
  //console.log(this.mobile);
//   let pattern="[1-9]{1}[0-9]{9}";  
//  if(this.mobile ==null || this.mobile.length!=12) {
//     let alert = this.alertCtrl.create({
//         title: "Invalid Number",
//         message: "Enter a Valid Number",
//         buttons: ["OK"]
//       });
//     alert.present();}
//   else 
    //if(this.mobile.match(pattern) && this.mobile.length==12){
      var isphone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(this.mobile);
      if(isphone==true){
        console.log(this.mobile);
        let alert = this.alertCtrl.create({
          message:"true",
          buttons: ["OK"]
        });
      alert.present();
      }
    else{
      let alert = this.alertCtrl.create({
        title: "Invalid Number",
        message: "Enter a Valid Number",
        buttons: ["OK"]
      });
    alert.present();
    }
      
   // }
  }  
}

