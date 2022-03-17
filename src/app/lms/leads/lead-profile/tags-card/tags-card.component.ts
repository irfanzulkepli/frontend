import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { TagRequest } from '../../interfaces/delete-tag-request.interface';
import { LeadService } from '../../lead.service';

@Component({
  selector: 'app-tags-card',
  templateUrl: './tags-card.component.html',
  styleUrls: ['./tags-card.component.scss']
})
export class TagsCardComponent implements OnInit {

  tagCtrl = new FormControl();
  tagChipCtrl = new FormControl([]);

  @Input() leadProfileData;
  @Input() profileType: string;

  isLoading: boolean = true;

  tags;
  allTag;
  filteredTags;

  constructor(
    private leadService: LeadService
  ) { }

  async ngOnInit() {
    this.allTag = await this.leadService.getTagListing().toPromise();
    const tags = [];
    for (const tag of this.leadProfileData.tags) {
      tags.push(tag.id);
    }
    this.tagChipCtrl.setValue(tags);

    this.isLoading = false;
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag) => (tag ? this._filterTag(tag) : this.allTag.slice()))
    );
  }


  removeTag(id): void {
    this.isLoading = true;
    const tags = this.tagChipCtrl.value as Array<number>;
    const newTags = tags.filter(tagId => tagId !== id);
    const requestBody: TagRequest = {
      id: id
    };
    this.leadService.deleteTag(requestBody, this.leadProfileData.id, this.profileType).subscribe({
      next: (n) => {
        this.tagChipCtrl.setValue(newTags);
        this.isLoading = false;
      }
    });
  }

  addTag(tag) {
    const tagList = this.tagChipCtrl.value as Array<number>;

    const tagExist = tagList.includes(tag.id);
    if (!tagExist) {
      this.removeTag(tag.id);
    }
    else {
      this.isLoading = true;
      const requestBody: TagRequest = {
        id: tag.id
      };
      this.leadService.addTag(requestBody, this.leadProfileData.id, this.profileType).subscribe({
        next: (n) => {
          this.isLoading = false;
        }
      });
    }
  }

  public getTag(id: number) {
    return this.allTag.find(tag => tag.id == id);
  }

  private _filterTag(value) {
    const filterValue = value.name ? value.name.toLowerCase() : value.toLowerCase();

    return this.allTag.filter(tag => tag.name.toLowerCase().includes(filterValue));
  }
}
