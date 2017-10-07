import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { LoggerService } from './Logger.Service';
import { ConfigService } from './config.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DataService, LoggerService, ConfigService]
})
export class ServicesModule { }
