import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReplaySubject, Subject } from 'rxjs';
import { DealsModalComponent } from '../../components/deals-modal/deals-modal.component';
import { DeleteModal2Component } from '../../components/delete-modal2/delete-modal2.component';
import { Person } from '../../data/person-data';
import { DealsService } from '../deals.service';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-deals-card',
  templateUrl: './deals-card.component.html',
  styleUrls: ['./deals-card.component.scss'],
})
export class DealsCardComponent implements OnInit, OnDestroy {

  @Input() person;
  public personCtrl: FormControl = new FormControl();
  public personFilterCtrl: FormControl = new FormControl();
  public filteredPerson: ReplaySubject<Person[]> = new ReplaySubject<Person[]>(1);
  @Input() userData;

  @Input() stageTypes: string;
  leadTypes: string[] = ["Person", "Organization"];
  @Input() pipelineOptions;

  @Input() cardData;
  @Output() refreshAllDeals = new EventEmitter<string>();

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();

  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    createdById: new FormControl(''),
    value: new FormControl(''),
    pipelinesId: new FormControl(''),
    stagesId: new FormControl(''),
    expiredAt: new FormControl(''),
    ownerId: new FormControl('')
  });

  constructor(
    private modalService: NgbModal,
    private dealsService: DealsService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getInitials() {
    const ownerFirstName = this.cardData.owner.firstName.split(' ');
    let ownerFNInitials: string;
    if (ownerFirstName.length > 1) {
      ownerFNInitials = ownerFirstName[0].charAt(0) + ownerFirstName[1].charAt(0);
    } else {
      ownerFNInitials = ownerFirstName[0].charAt(0);
    }

    const ownerLastName = this.cardData.owner.lastName.split(' ');
    let ownerLNInitials: string;
    if (ownerLastName.length > 1) {
      ownerLNInitials = ownerLastName[0].charAt(0) + ownerLastName[1].charAt(0);
    } else {
      ownerLNInitials = ownerLastName[0].charAt(0);
    }
    return ownerFNInitials.toUpperCase() + ownerLNInitials.toUpperCase();
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

  getDeals() {
    this.dealsService.getDealsById(this.cardData.id).subscribe({
      next: (n) => {
        console.log(n);
        this.form.patchValue({
          id: n.id,
          title: n.title,
          description: n.description,
          createdById: n.createdBy?.id,
          value: n.value,
          pipelinesId: n.pipelines?.id,
          stagesId: n.stages?.id,
          expiredAt: n.expiredAt,
          ownerId: n.owner?.id
        })
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  updateDeals() {
    this.dealsService.updateDeals(this.form.value).subscribe({
      next: (n) => {
        this.refreshData();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  deleteDeals() {
    this.dealsService.deleteDealsById(this.cardData.id).subscribe({
      next: (n) => {
        this.refreshData();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  refreshData() {
    this.modalService.dismissAll();
    this.refreshAllDeals.emit();
  }
}
