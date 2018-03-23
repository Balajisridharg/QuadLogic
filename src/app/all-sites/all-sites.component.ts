import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-sites',
  templateUrl: './all-sites.component.html',
  styleUrls: ['./all-sites.component.css']
})
export class AllSitesComponent implements OnInit {

  cols: any[];
  sales: any[];
  constructor() { }

  ngOnInit() {
        this.sales = [
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},

          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { site:'parkside Site, Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
      ];
  }

}
