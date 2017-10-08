import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { ICustomer } from '../../Model/ICustomer';
@Injectable()
export class CustomerService {
  customers$: AngularFireList<ICustomer[]>;

  constructor(private db: AngularFireDatabase) {
    this.customers$ = this.db.list(`customers`);
  }
  getCustomers() {
    return this.customers$;
  }

  private errorHandler(error) {
    console.log(error);
    debugger
    return Observable.throw(error.message);
  }
}
