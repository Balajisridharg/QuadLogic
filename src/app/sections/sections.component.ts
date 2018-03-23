import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor() { }
  items: any[];
  cities: any[];
  display: boolean = false; 
  selectedCity: any;
 

  ngOnInit() {
    this.items = [
      {"brand": "VW", "section": "Sewage Rate", "color": "Orange",},
                {"brand": "Audi", "section": "Section C1", "color": "Black"},
                {"brand": "Renault", "section": "Section RA", "color": "Gray"},
                {"brand": "BMW", "section": "Water Rate", "color": "Blue"},
                {"brand": "Mercedes", "section": "Gas Rate", "color": "Orange"},
                {"brand": "Volvo", "section": 2005, "color": "Black"},
                {"brand": "Honda", "section": 2012, "color": "Yellow"},
                {"brand": "Jaguar", "section": 2013, "color": "Orange"},
                {"brand": "Ford", "section": 2000, "color": "Black"},
                {"brand": "Fiat", "section": 2013, "color": "Red"},
                {"brand": "VW", "section": 2012, "color": "Orange"},
              

    ];
    this.cities = [{label:'Select City', value:null},
    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}];
  }

 



    showDialog() {
        this.display = true;
    }


  handleClick() {
    //execute action
}

 

 
}
