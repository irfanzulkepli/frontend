import { Component, OnInit } from '@angular/core';
import { TEMPLATES } from '../../data/templates.data';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  public templates = TEMPLATES;

  constructor() { }

  ngOnInit() {
  }

}
