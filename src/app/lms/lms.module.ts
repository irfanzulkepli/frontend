import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SettingsComponent } from './settings/settings.component';
import { CustomTableModule } from 'src/app/components/custom-table/custom-table.module';
import { ListFilterPipe } from './settings/listFilterPipe';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import bootstrapPlugin from "@fullcalendar/bootstrap";

import { LMSRoutingModule } from './lms-routing.module';
import { UIModule } from '../shared/ui/ui.module';
import { DashboardsModule } from './dashboards/dashboards.module';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
    dayGridPlugin,
    interactionPlugin,
    bootstrapPlugin
]);

@NgModule({
    declarations: [SettingsComponent,ListFilterPipe],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LMSRoutingModule,
        DashboardsModule,
        UIModule,
        NgbModule,
        NgbModalModule,
        CustomTableModule,
        MatTabsModule,
        MatSelectModule,
        NgxMatSelectSearchModule,
        MatChipsModule,
        MatIconModule
    ],
    exports: [SettingsComponent],
    bootstrap: [SettingsComponent],
    providers: [NgbActiveModal]
})
export class LMSModule { }
