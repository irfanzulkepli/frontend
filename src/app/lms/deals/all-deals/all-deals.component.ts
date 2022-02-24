import { Component, OnInit } from '@angular/core';
import { ALLDEALS } from '../../data/all-deals.data';

@Component({
  selector: 'app-all-deals',
  templateUrl: './all-deals.component.html',
  styleUrls: ['./all-deals.component.scss']
})
export class AllDealsComponent implements OnInit {

  deals: any[] = ALLDEALS

  constructor() { }

  ngOnInit() {
  }

}
