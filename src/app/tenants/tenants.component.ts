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
  edit:any[];
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

  this.edit = [
    {label: 'Edit', icon: 'far fa-pencil', command: () => {
            
    }},
    {label: 'Delete', icon: 'far fa-trash', command: () => {
        
    }},
    // {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
    // {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
];


}
showDialog() {
  this.display = true;
}

}
