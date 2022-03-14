import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDealsComponent } from './all-deals/all-deals.component';
import { LostReasonsComponent } from './lost-reasons/lost-reasons.component';
import { PipelineViewComponent } from './pipeline-view/pipeline-view.component';
import { PipelinesComponent } from './pipelines/pipelines.component';

const routes: Routes = [
    { path: 'all-deals', component: AllDealsComponent, },
    { path: 'pipelines', component: PipelinesComponent, },
    { path: 'pipeline-view', component: PipelineViewComponent, },
    { path: 'pipeline-view/:id', component: PipelineViewComponent, },
    { path: 'lost-reasons', component: LostReasonsComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class DealsRoutingModule { }
