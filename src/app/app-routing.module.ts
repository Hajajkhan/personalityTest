import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StartedComponent } from './started/started.component';
import { StepperComponent } from './stepper/stepper.component';
import { ResultantComponent } from './resultant/resultant.component';

const routes: Routes = [
  {
    path:'',
  component:StartedComponent
  },
  {
    path:'stepper',
    component:StepperComponent
  },
  {
    path:'resultant',
    component:ResultantComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
