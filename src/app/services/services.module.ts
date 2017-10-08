import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { LoggerService } from './Logger.Service';
import { ConfigService } from './config.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [DataService, LoggerService, ConfigService]
})
export class ServicesModule {
  constructor( @Optional() @SkipSelf() parentModule: ServicesModule) {
    throwIfAlreadyLoaded(parentModule, 'ServicesModule');
  }

}
