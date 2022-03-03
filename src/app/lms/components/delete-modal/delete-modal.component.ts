import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {

  @Output() onConfirmationClick = new EventEmitter();

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  cancelClick() {
    this.activeModal.close();
    this.onConfirmationClick.emit(false);
  }

  confirmClick() {
    this.activeModal.close();
    this.onConfirmationClick.emit(true);
  }
}
