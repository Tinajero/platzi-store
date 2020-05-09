import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
    {
        path: '',
        component: DemoComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class DemoRoutingModule {}
