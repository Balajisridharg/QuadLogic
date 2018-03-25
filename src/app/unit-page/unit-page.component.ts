import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-page',
  templateUrl: './unit-page.component.html',
  styleUrls: ['./unit-page.component.css']
})
export class UnitPageComponent implements OnInit {
  items: any[];
  cities: any[];
  display: boolean = false; 
  selectedCity: any;
  edit: any[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {identifier: 'Apple', residents: '51%', sectionLabels: '40%', electric: '$54,406.00', water: '$43,342',gasmeterIds: '$15000'},
      {identifier: 'Apple', residents: '51%', sectionLabels: '40%', electric: '$54,406.00', water: '$43,342',gasmeterIds: '$15000'},
      {identifier: 'Apple', residents: '51%', sectionLabels: '40%', electric: '$54,406.00', water: '$43,342',gasmeterIds: '$15000'},
      {identifier: 'Apple', residents: '51%', sectionLabels: '40%', electric: '$54,406.00', water: '$43,342',gasmeterIds: '$15000'},      {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
      {identifier: 'Apple', residents: '51%', sectionLabels: '40%', electric: '$54,406.00', water: '$43,342',gasmeterIds: '$15000'},      {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
      {identifier: 'Apple', residents: '51%', sectionLabels: '40%', electric: '$54,406.00', water: '$43,342',gasmeterIds: '$15000'},      {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
      {identifier: 'Apple', residents: '51%', sectionLabels: '40%', electric: '$54,406.00', water: '$43,342',gasmeterIds: '$15000'},              

    ];
    this.cities = [{label:'Select City', value:null},
    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}];

    this.edit = [
      {label: 'Edit', icon: 'far fa-pencil', command: () => {
              
      }},
      {label: 'Delete', icon: 'far fa-trash', command: () => {
          
      }},
      // {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
      // {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
  ];
  }

}
