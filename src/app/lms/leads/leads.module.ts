import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { LeadGroupComponent } from './lead-group/lead-group.component';
import { LeadProfileComponent } from './lead-profile/lead-profile.component';
import { OrganizationComponent } from './organization/organization.component';
import { LeadsRoutingModule } from './leads-routing.module';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SimplebarAngularModule } from 'simplebar-angular';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSelectModule } from '@angular/material/select';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdvancedSortableDirective } from './advanced-sortable.directive';
import { AdvancedService } from './advanced.service';


const config: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 100,
};


@NgModule({
    declarations: [
        PeopleComponent,
        LeadGroupComponent,
        LeadProfileComponent,
        OrganizationComponent,
        AdvancedSortableDirective
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LeadsRoutingModule,
        UIModule,
        NgbNavModule,
        DropzoneModule,
        CKEditorModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatFormFieldModule,
        SimplebarAngularModule,
        NgbDropdownModule,
        Ng2TelInputModule,
        NgbModalModule,
        NgxMatSelectSearchModule,
        MatSelectModule,
        Ng2SmartTableModule,
        NgbPaginationModule,
        NgbTypeaheadModule
    ],
    providers: [
        {
            provide: DROPZONE_CONFIG,
            useValue: config
        },
        DecimalPipe,
        AdvancedService
    ]
})
export class LeadsModule { }
