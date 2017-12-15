import { NgModule, ErrorHandler} from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MobilePage } from '../pages/mobile/mobile.component'
import { AngularFireModule} from 'angularfire2';
import { Data } from '../providers/data';
import {RegisterPage} from "../pages/register/register";
import {RechargeDetailsComponent} from "../pages/mobile/rechargeDetails.component";
import { PaymentPage } from '../pages/payment/payment.component';
import { ElectricityPage } from '../pages/electricity/electricity';
import { CheckoutPage } from '../pages/electricity/checkout.component';
import { InternetPage } from '../pages/internet/internet';
import { AboutPage } from '../pages/about/about';
import {TabsPage} from "../pages/tabs/tabs";
import {PaymentHistoryPage} from "../pages/payment-history/payment-history";

export const stripeConfig = {
  production: false,
  stripeKey: 'pk_test_AGjDkveo2MDDeJmJBqVn69Zi',
}

export const fireBaseConfig ={
  apiKey: "AIzaSyDiZpt9UT6Uk-7JmKEfn1tlhrgcy5qjA7I",
  authDomain: "store-2af90.firebaseapp.com",
  databaseURL: "https://store-2af90.firebaseio.com",
  storageBucket: "store-2af90.appspot.com",
  messagingSenderId: "342040686601"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    MobilePage,
    RegisterPage,
    RechargeDetailsComponent,
    PaymentPage,
    ElectricityPage,
    CheckoutPage,
    InternetPage,
    AboutPage,
    TabsPage,
    PaymentHistoryPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    MobilePage,
    RegisterPage,
    RechargeDetailsComponent,
    PaymentPage,
    ElectricityPage,
    CheckoutPage,
    InternetPage,
    AboutPage,
    TabsPage,
    PaymentHistoryPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},Data]
})
export class AppModule {}
