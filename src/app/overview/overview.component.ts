import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  items: any[];
  // home: MenuItem;
  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Sites'},
      {label:'parkside'},
  ];
  }
  msgs: any[];
    
  onTabChange(event) {
      this.msgs = [];
      this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  }
}
