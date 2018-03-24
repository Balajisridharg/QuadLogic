import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  items: any[];
  display: boolean = false;
  cities: any[];

  ngOnInit() {
    this.items = [
                {"username": "Olivia Elle", "emailaddress": "oliviaelle@gmail.com",  "roles": "Property Manager", "actions": "buttons"}, 
                {"username": "John Deo", "emailaddress": "johndeo@gmail.com",  "roles": "Biller", "actions": "buttons"}, 
                {"username": "Stuart Clark", "emailaddress": "stuartclark@gmail.com",  "roles": "Checker", "actions": "buttons"}, 
                {"username": "Robert Mark", "emailaddress": "robertmark@gmail.com",  "roles": "Admin", "actions": "buttons"}, 
                {"username": "Williams Smith", "emailaddress": "williamssmith@gmail.com",  "roles": "Client Services", "actions": "buttons"}, 
                {"username": "Johnson Statham", "emailaddress": "johnsonstatham@gmail.com",  "roles": "Property Manager", "actions": "buttons"}, 
              

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