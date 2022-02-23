import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-deal-modal',
  templateUrl: './add-deal-modal.component.html',
  styleUrls: ['./add-deal-modal.component.scss'],
})
export class AddDealModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

}
