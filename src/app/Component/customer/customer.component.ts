import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { CustomerService } from '../../services/customer/customer.service';
import { ICustomer } from '../../Model/ICustomer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers$: AngularFireList<ICustomer[]>;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
  getcustomers() {
    this.customers$ = this.customerService.getCustomers();
  }
}
