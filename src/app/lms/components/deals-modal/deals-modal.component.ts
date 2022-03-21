import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CommonService } from '../../common/common.service';
import { Person } from '../../data/person-data';
import { DealsService } from '../../deals/deals.service';
import { PipelinesService } from '../../deals/pipelines.service';
import { StagesService } from '../../deals/stages.service';
import { LEADTYPE } from '../../enum/lms-type.enum';
import { LeadService } from '../../leads/lead.service';
import { LMSService } from '../../lms-service';

@Component({
  selector: 'app-deals-modal',
  templateUrl: './deals-modal.component.html',
  styleUrls: ['./deals-modal.component.scss']
})
export class DealsModalComponent implements OnInit {

  protected _onDestroy = new Subject<void>();

  @Input() dealDatas;
  @Input() showLeadType: boolean = true;
  @Input() contextableType: string = LEADTYPE.PERSON;
  @Input() organization;
  @Output() dealDetails = new EventEmitter();
  @Output() refreshDealsListPipelineView = new EventEmitter();

  public pipelines;
  public users;
  public leadTypes: string[] = [LEADTYPE.PERSON, LEADTYPE.ORGANIZATION];
  public stages;

  public filteredOrganizations;
  public filteredPerson: Observable<Array<Person>>;

  personFilterCtrl = new FormControl();
  organizationFilterCtrl = new FormControl();

  persons = [];
  isLoading: boolean = true;

  showOrganization: boolean = true;
  submitClicked: boolean = false;

  public dealForm: FormGroup = this.fb.group({
    id: [''],
    title: ['', Validators.required],
    description: [''],
    contextableType: [LEADTYPE.PERSON],
    personId: ['', Validators.required],
    organizationId: [''],
    value: [''],
    pipelinesId: ['', Validators.required],
    stagesId: ['', Validators.required],
    expiredAt: [''],
    ownerId: ['', Validators.required],
    contactPerson: ['']
  });

  constructor(
    private fb: FormBuilder,
    public commonService: CommonService,
    public activeModal: NgbActiveModal,
    private dealsService: DealsService,
    private pipelinesService: PipelinesService,
    private stagesService: StagesService,
    private lmsService: LMSService,
    private leadService: LeadService
  ) { }

  ngOnInit() {
    this.dealForm.get('stagesId').disable();
    this.dealForm.get('contextableType').valueChanges.subscribe((value) => {
      if (value == LEADTYPE.ORGANIZATION) {
        this.dealForm.get('personId').clearValidators();
        this.dealForm.get('organizationId').setValidators(Validators.required);
        this.dealForm.get('organizationId').valueChanges.subscribe(async (value) => {
          this.persons = await this.leadService.getPersonsByOrganizationId(value).toPromise();
        });
      }
      else {
        this.dealForm.get('organizationId').clearValidators();
        this.dealForm.get('personId').setValidators(Validators.required);
        this.dealForm.get('personId').reset();
      }

      this.dealForm.updateValueAndValidity();
    });

    this.getPipelinesList();
    this.getUsersList();
    this.getPersonList();
    this.getOrganizationList();

    if (this.dealDatas) {
      this.dealForm.get('id').setValidators(Validators.required);
      this.dealForm.updateValueAndValidity();
      this.getDeals();
    }

    this.dealForm.get('contextableType').setValue(this.contextableType);
    if (this.organization) {
      this.showOrganization = false;
      this.dealForm.get('organizationId').setValue(this.organization);
    }
    this.isLoading = false;
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  getDeals() {
    this.dealsService.getDealsById(this.dealDatas.id).subscribe({
      next: (n) => {
        const leadTypeIndicator = n.contextableType.includes(LEADTYPE.PERSON);

        this.dealForm.patchValue({
          id: n.id ? n.id : '',
          title: n.title ? n.title : '',
          description: n.description ? n.description : '',
          value: n.value ? n.value : '',
          pipelinesId: n.pipelines.id ? n.pipelines.id : '',
          stagesId: n.stages.id ? n.stages.id : '',
          ownerId: n.owner.id ? n.owner.id : '',
          contextableType: leadTypeIndicator ? LEADTYPE.PERSON : LEADTYPE.ORGANIZATION,
          expiredAt: n.expiredAt ? n.expiredAt : '',
          personId: n.person ? n.person.id : '',
          organizationId: n.organization ? n.organization.id : ''
        });

        if (n.contextableType === LEADTYPE.PERSON) {
          this.dealForm.controls['personId'].setValue(n.contextableId + '');
        } else if (n.contextableType === LEADTYPE.ORGANIZATION) {
          this.dealForm.controls['organizationId'].setValue(n.contextableId + '');
        }

        this.getStagesListByPipelineId();
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  onPipelinesIdChange() {
    this.dealForm.patchValue({
      stagesId: ''
    });
    this.getStagesListByPipelineId();
  }

  onCancelClick() {
    this.activeModal.close(false);
  }

  onSaveClick() {
    this.submitClicked = true;

    if (this.dealForm.invalid) {
      return;
    }

    if (this.dealForm.value.id) {
      this.updateDeals();
    } else {
      this.addDeals();
    }
  }

  addDeals() {
    this.isLoading = true;
    this.dealsService.addDeals(this.dealForm.value).subscribe({
      next: (n) => {
        this.activeModal.close(true);
        this.refreshDealsListPipelineView.emit();
        this.isLoading = false;
      },
      error: (e) => {
        this.activeModal.close(false);
        this.isLoading = false;
      },
      complete: () => { }
    })
  }

  updateDeals() {
    this.isLoading = true;
    this.dealsService.updateDeals(this.dealForm.value).subscribe({
      next: (n) => {
        this.activeModal.close(true);
        this.isLoading = false;
      },
      error: (e) => {
        this.activeModal.close(false);
        this.isLoading = false;
      },
      complete: () => { }
    })
  }
  getPipelinesList() {
    this.pipelinesService.getPipelinesList().subscribe({
      next: (n) => {
        this.pipelines = n;
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getStagesListByPipelineId() {
    this.stages = [];
    this.stagesService.getStagesListByPipelineId(this.dealForm.value.pipelinesId).subscribe({
      next: (n) => {
        this.stages = n;
        this.dealForm.get('stagesId').enable();

      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getUsersList() {
    this.lmsService.getUsersList().subscribe({
      next: (n) => {
        this.users = n;
        this.dealForm.get('ownerId').setValue(this.users[0].id);
      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getPersonList() {
    this.lmsService.getPersonList().subscribe({
      next: (n) => {
        this.filteredPerson = this.personFilterCtrl.valueChanges.pipe(
          startWith(null),
          map((value: string) => (value ? this.commonService.filter(value, n, "name") : n))
        );

      },
      error: (e) => { },
      complete: () => { }
    })
  }

  getOrganizationList() {
    this.leadService.getOrganizationsListing().subscribe({
      next: (n) => {
        this.filteredOrganizations = this.organizationFilterCtrl.valueChanges.pipe(
          startWith(null),
          map((value: string) => value ? this.commonService.filter(value, n, "name") : n)
        );
      }
    });
  }
}
