import { Component, OnInit, Version, VERSION } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'yo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle(`Dashboard ${VERSION.full}`)
  }

}
