import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  constructor() { }
  items: any[];

  ngOnInit() {
    this.items = [
      {"brand": "VW", "year": 2012, "color": "Orange",},
                {"brand": "Audi", "year": 2011, "color": "Black"},
                {"brand": "Renault", "year": 2005, "color": "Gray"},
                {"brand": "BMW", "year": 2003, "color": "Blue"},
                {"brand": "Mercedes", "year": 1995, "color": "Orange"},
                {"brand": "Volvo", "year": 2005, "color": "Black"},
                {"brand": "Honda", "year": 2012, "color": "Yellow"},
                {"brand": "Jaguar", "year": 2013, "color": "Orange"},
                {"brand": "Ford", "year": 2000, "color": "Black"},
                {"brand": "Fiat", "year": 2013, "color": "Red"},
                {"brand": "VW", "year": 2012, "color": "Orange"},
              

    ];
  }

}
