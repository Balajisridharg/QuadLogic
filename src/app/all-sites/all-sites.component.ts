import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-sites',
  templateUrl: './all-sites.component.html',
  styleUrls: ['./all-sites.component.css']
})
export class AllSitesComponent implements OnInit {

  // msgs: Message[] = [];
    
  items: any[];

  cols: any[];
  sales: any[];
  constructor() { }

  ngOnInit() {
        this.sales = [
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
          { address:'parkside Site,',site:'Block A,2-124/31 reve...',city: 'Tampa',state: 'florida',units:'120',managers:'Mc miller',tanants: '135'},
      ];
      this.items = [
        {label: 'Edit', icon: 'far fa-pencil', command: () => {
            
        }},
        {label: 'Delete', icon: 'far fa-trash', command: () => {
            
        }},
        // {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
        // {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
    ];
 
  }
  display: boolean = false;
  showDialog() {
    this.display = true;
}
}
