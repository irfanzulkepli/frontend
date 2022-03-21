import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs/operators';
import { CustomTableDatasource } from 'src/app/components/custom-table/custom-table.interface';
import { DIRECTION, PageableRequest } from 'src/app/lms/interfaces/pageable-request.interface';
import { ColumnsInfo } from 'src/app/lms/lms-service';
import { UpdateFollowerRequest } from '../../interfaces/update-follower-request.interface';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-followers-card',
  templateUrl: './followers-card.component.html',
  styleUrls: ['./followers-card.component.scss']
})
export class FollowersCardComponent implements OnInit {

  columnsInfo: Array<ColumnsInfo> = [
    {
      displayName: 'Name',
      columnDef: 'name',
      type: 'text'
    },
    {
      displayName: 'Type',
      columnDef: 'contactTypes',
      type: 'badge'
    },
    {
      displayName: 'Closed deal(s)',
      columnDef: 'closedDealsCount',
      type: 'number'
    },
    {
      displayName: 'Open deal(s)',
      columnDef: 'openDealsCount',
      type: 'number'
    },
    {
      displayName: 'Owner',
      columnDef: 'owner',
      type: 'combinedName'
    },
    {
      displayName: 'Tags',
      columnDef: 'tags',
      type: 'tag'
    }
  ];

  @Input() leadProfileData;
  @Input() profileType: string;

  followerList;
  allFollowers;
  filteredFollowers = [];

  followerDetails;
  dataSource;
  submitClicked: boolean = false;

  followerForms: FormGroup = this.fb.group({
    followers: this.fb.array([])
  });

  isEditFollower: boolean = false;
  isLoading: boolean = true;
  isModalLoading: boolean = true;

  constructor(
    private fb: FormBuilder,
    private leadService: LeadService,
    private modalService: NgbModal
  ) { }

  async ngOnInit() {
    this.allFollowers = await this.leadService.getPeopleListing().toPromise();

    const pageableRequest: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: 0,
      properties: ["id"],
      size: 3
    }
    this.followerDetails = await this.leadService.getFollowersById(this.leadProfileData.id, pageableRequest, this.profileType).toPromise();
    this.followers.valueChanges.subscribe(() => {
      this.hasDuplicate('follower');
    });
    await this.populateForms();
    this.isLoading = false;
  }

  onCancel() {
    this.populateForms();
    this.submitClicked = false;
    this.isEditFollower = false;
  }

  onSaveClick() {
    const formValid = this.followers.valid;
    this.followers.markAllAsTouched();
    this.submitClicked = true;

    console.log('followers: ', this.followers);

    if (!formValid) {
      return;
    }

    this.isLoading = true;

    const followerIds = [];
    for (const follower of this.followers.value) {
      followerIds.push(follower.follower);
    }

    const payload: UpdateFollowerRequest = {
      followerIds: followerIds
    }

    this.leadService.updateFollowers(payload, this.leadProfileData.id, this.profileType).subscribe({
      next: async (n) => {
        const pageableRequest: PageableRequest = {
          direction: DIRECTION.ASCENDING,
          page: 0,
          properties: ["id"],
          size: 3
        }
        this.followerDetails = await this.leadService.getFollowersById(this.leadProfileData.id, pageableRequest, this.profileType).toPromise();
        await this.populateForms();

        this.isEditFollower = false;
        this.submitClicked = false;
        this.isLoading = false;
      }
    })
  }

  addFollower() {
    const followerForm = this.fb.group({
      follower: ['', Validators.required],
      followerCtrlName: ['']
    });

    this.followers.push(followerForm);
    this.manageFollowerFilter(this.followers.controls.length - 1);
  }

  manageFollowerFilter(index: number) {
    this.filteredFollowers[index] = {};
    this.filteredFollowers[index] = this.followers.at(index).get('followerCtrlName').valueChanges
      .pipe(
        startWith(null),
        map((value) => (value ? this._filterFollower(value) : this.allFollowers.slice())
        )
      );
  }

  deleteFollower(index: number) {
    this.followers.removeAt(index);
    this.filteredFollowers.splice(index, 1);
  }

  getInitial(name: string) {
    if (name) {
      const fullName = name.split(' ');

      let initials: string;
      if (fullName.length > 1) {
        initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
      }
      else {
        initials = fullName.shift().charAt(0);
      }
      return initials.toUpperCase();
    }
    else {
      return 'AZ';
    }
  }

  async openModal(content) {
    this.isModalLoading = true;
    const pageableRequest: PageableRequest = {
      direction: DIRECTION.ASCENDING,
      page: 0,
      properties: ["id"],
      size: 10
    }

    this.modalService.open(content, { size: 'xl', centered: true, scrollable: true });
    this.dataSource = await this.leadService.getFollowersById(this.leadProfileData.id, pageableRequest, this.profileType).toPromise();
    this.isModalLoading = false;
  }

  get followers() {
    return this.followerForms.controls.followers as FormArray;
  }


  private _filterFollower(value) {
    const filterValue = value;

    return this.allFollowers.filter(follower => follower.name.toLowerCase().includes(filterValue));
  }

  private async populateForms() {
    this.followers.clear();
    if (this.followerDetails.totalSize > 3) {
      const pageableRequest: PageableRequest = {
        direction: DIRECTION.ASCENDING,
        page: 0,
        properties: ["id"],
        size: this.followerDetails.totalSize
      }

      const followerList: any = await this.leadService.getFollowersById(this.leadProfileData.id, pageableRequest, this.profileType).toPromise();

      for (const follower of followerList.payload) {
        const followerForm = this.fb.group({
          follower: [follower.peopleId, Validators.required],
          followerCtrlName: ['']
        });

        this.followers.push(followerForm);
        this.manageFollowerFilter(this.followers.controls.length - 1);
      }
    }
    else {
      for (const follower of this.followerDetails.payload) {
        const followerForm = this.fb.group({
          follower: [follower.peopleId, Validators.required],
          followerCtrlName: ['']
        });

        this.followers.push(followerForm);
        this.manageFollowerFilter(this.followers.controls.length - 1);
      }
    }
  }

  hasDuplicate(keyForm) {
    let dict = {};
    let duplicates = [];

    for (const organization of this.followers.controls) {
      organization.get(keyForm).setErrors(null);
    }

    this.followers.value.forEach((item, index) => {
      dict[item.follower] = dict[item.follower] || [];
      dict[item.follower].push(index);
    });

    for (var key in dict) {
      if (dict[key].length > 1) duplicates = duplicates.concat(dict[key]);
    }

    for (const index of duplicates) {
      this.followers.at(index).get(keyForm).setErrors({ duplicated: true });
    }
  }

  public invalidChecking(formGroup: FormGroup, field: string): boolean {
    if ((this.submitClicked && formGroup.get(field).getError('required') && formGroup.touched)
      || (this.submitClicked && formGroup.get(field).getError('duplicated') && formGroup.touched)) {
      return true;
    }
    else {
      return false;
    }
  }
}
