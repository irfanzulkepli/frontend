import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersRoleComponent } from './users-role/users-role.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard' },

    { path: 'dashboard', component: DefaultComponent },
    { path: 'users-role', component: UsersRoleComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) },
    { path: 'deals', loadChildren: () => import('./deals/deals.module').then(m => m.DealsModule) },
    { path: 'activities', loadChildren: () => import('./activities/activities.modules').then(m => m.ActivitiesModule) },
    { path: 'proposals', loadChildren: () => import('./proposals/proposals.module').then(m => m.ProposalsModule) },
    { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LMSRoutingModule { }
