import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meters',
  templateUrl: './meters.component.html',
  styleUrls: ['./meters.component.css']
})
export class MetersComponent implements OnInit {

  items: any[];
  display: boolean = false;
  cities: any[];

  ngOnInit() {
    this.items = [
                {"virtual": "VR55333", "meterid": "234345677",  "multiplier": "1.0", "units": "4564", "utility":"Electricity"}, 
                {"virtual": "VR554563e", "meterid": "234345677, 234345677",  "multiplier": "1.0", "units": "5334", "utility":"Water & Sewage"}, 
                {"virtual": "VR55333", "meterid": "34545647",  "multiplier": "1.0 ", "units": "5664", "utility":"Gas"}, 
                {"virtual": "VR556333", "meterid": "456343667",  "multiplier": "1.0 ", "units": "4456", "utility":"Water & Sewage"}, 
                
              

    ];

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

   


}
showDialog() {
  this.display = true;
}

}
