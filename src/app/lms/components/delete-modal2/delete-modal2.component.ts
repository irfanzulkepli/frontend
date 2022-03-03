import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal2',
  templateUrl: './delete-modal2.component.html',
  styleUrls: ['./delete-modal2.component.scss']
})
export class DeleteModal2Component implements OnInit {

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  cancelClick() {
    this.activeModal.close(false);
  }

  confirmClick() {
    this.activeModal.close(true);
  }
}
