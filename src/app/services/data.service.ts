import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ConfigService } from './config.service';
import { IEmployees } from '../Model/IEmployee';
import { LoggerService } from './Logger.Service';
import { ResponseType } from '@angular/http';

@Injectable()
export class DataService {
  baseUrl: string;
  constructor(private loggerService: LoggerService, private configService: ConfigService, private httpClient: HttpClient) {
    this.baseUrl = configService.getApiURI();
  }
  getEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl + '/Employees')
      .map((employees: any[]) => {
        return employees;
      })
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      //return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'ASP.NET Core server error');
  }
}
