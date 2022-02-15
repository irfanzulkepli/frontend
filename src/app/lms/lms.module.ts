import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';

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
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LMSRoutingModule,
        DashboardsModule,
        UIModule,
    ]
})
export class LeadsModule { }
