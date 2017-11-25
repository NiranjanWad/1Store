import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../payment/paymentService';
import { PaymentPage } from '../payment/payment.component';



@NgModule({
  imports:[
    CommonModule
  ],

  declarations:[PaymentPage],
  providers:[PaymentService]
})

export class PaymentModule {

}
