import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboards/default/default.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard' },

    { path: 'dashboard', component: DefaultComponent },
    { path: 'leads', loadChildren: () => import('./leads/leads.module').then(m => m.LeadsModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LMSRoutingModule { }
