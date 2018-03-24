import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  items: any[]
  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Sites'},
      {label:'parkside'},
  ];
  }

}
