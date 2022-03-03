import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';
import { DealsModalComponent } from '../../components/deals-modal/deals-modal.component';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';

@Component({
  selector: 'app-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss'],
})
export class DealsCardComponent implements OnInit, OnDestroy {

  stageTypes: string[] = ["Lead generation", "Lead nurturing", "Marketing qualified lead", "Sales accepted lead", "Sales qualified lead", "Closed deals", "Post-sale"];
  leadTypes: string[] = ["Person", "Organization"];
  pipelineOptions: string[] = ["Lead Pipeline (Sales)", "test1"];

  @Input() cardData;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getInitials() {
    const ownerName = this.cardData.owner.fullName.split(' ');
    let ownerInitials: string;
    if (ownerName.length > 1) {
      ownerInitials = ownerName[0].charAt(0) + ownerName[1].charAt(0);
    } else {
      ownerInitials = ownerName[0].charAt(0);
    }
    return ownerInitials.toUpperCase();
  }

  openProfile() {
    const modalRef = this.modalService.open(ProfileModalComponent, { size: 'xl' });
    (<ProfileModalComponent>modalRef.componentInstance).inputData = this.cardData;
  }

  editModal() {
    const modalRef = this.modalService.open(DealsModalComponent);

    modalRef.componentInstance.dealDatas = this.cardData;
    modalRef.result.then(result => console.log('result: ', result));
  }

  deleteModal() {
    const modalRef = this.modalService.open(DeleteModal2Component, { centered: true });

    modalRef.result.then(result => console.log('result: ', result));
  }
}
