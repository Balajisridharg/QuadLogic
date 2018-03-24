import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.css']
})
export class TenantsComponent implements OnInit {

  items: any[];
  display: boolean = false;
  cities: any[];

  ngOnInit() {
    this.items = [
                {"username": "Olivia Elle", "emailaddress": "oliviaelle@gmail.com",  "units": "2156", "type": "Resident"}, 
                {"username": "Olivia Elle", "emailaddress": "oliviaelle@gmail.com",  "units": "2156 , 2354", "type": "Commercial"}, 
                {"username": "Olivia Elle", "emailaddress": "oliviaelle@gmail.com",  "units": "2156 ", "type": "Resident"}, 
                {"username": "Olivia Elle", "emailaddress": "oliviaelle@gmail.com",  "units": "2156 ", "type": "Resident"}, 
                
              

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
