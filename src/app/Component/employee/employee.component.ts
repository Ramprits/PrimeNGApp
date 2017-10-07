import { Component, OnInit, Version, VERSION } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';
import { IEmployees } from '../../Model/IEmployee';

@Component({
  selector: 'yo-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: IEmployees[];

  constructor(private dataService: DataService, private title: Title) { }

  ngOnInit() {
    this.dataService.getEmployees().subscribe(x => { this.employees = x });
    this.title.setTitle(`Employee List ${VERSION.full}`);
  }

}
