import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { LoggerService } from './Logger.Service';
import { ConfigService } from './config.service';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CustomerService } from './customer/customer.service';
import { AuthService } from './auth/auth.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports: [CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule],
  declarations: [],
  providers: [DataService, LoggerService, ConfigService, CustomerService, AuthService]
})
export class ServicesModule {
  constructor( @Optional() @SkipSelf() parentModule: ServicesModule) {
    throwIfAlreadyLoaded(parentModule, 'ServicesModule');
  }

}
