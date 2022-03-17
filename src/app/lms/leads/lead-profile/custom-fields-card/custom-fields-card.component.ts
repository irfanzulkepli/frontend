import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-fields-card',
  templateUrl: './custom-fields-card.component.html',
  styleUrls: ['./custom-fields-card.component.scss']
})
export class CustomFieldsCardComponent implements OnInit {

  isEditCustomField: boolean = false;

  constructor(
  ) { }

  ngOnInit() {
  }

}
