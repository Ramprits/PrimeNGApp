import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'yo-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  constructor() { }

  @Input() icon: string;
  @Input() label: string;
  @Input() value: string;
  @Input() colour: string;
  ngOnInit() {
  }

}
