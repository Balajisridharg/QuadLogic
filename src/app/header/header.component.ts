import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label: 'Sites',
              icon: 'fa-building',
              
          },
          {
              label: 'Rates',
              icon: 'fa-money',
               
          },
          {
            label: 'Collections',
            icon: 'fa-money',
             
        },
        {
            label: 'Reports',
            icon: 'fa-file',
             
        }
      ];
  }
}
