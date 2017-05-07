import { AdvancedModeComponent } from './advanced-mode/advanced-mode.component';
import { SimpleModeComponent } from './simple-mode/simple-mode.component';
import {Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: 'simpleMode', component: SimpleModeComponent },
    { path: 'advancedMode', component: AdvancedModeComponent },
    { path: '', redirectTo: 'simpleMode',     pathMatch: 'full'  }
];

export const routing = RouterModule.forRoot(routes);
