import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './stepper/data.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,NgForm} from '@angular/forms';

import { StepperComponent } from './stepper/stepper.component';
import { ResultantComponent } from './resultant/resultant.component';
import { StartedComponent } from './started/started.component';


@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    ResultantComponent,
    StartedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,
    MatStepperModule,MatRadioModule,MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
