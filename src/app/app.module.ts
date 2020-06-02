import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BasicInfoModule } from './basic-info/basic-info.module';
import { DepartmentInfoModule } from './department-info/department-info.module';
import { HeaderModule } from './header/header.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { CallsComponent } from './calls/calls.component';
import { MaterialModule } from './shared/material.module';
import { CasesComponent } from './cases/cases.component';

@NgModule({
  declarations: [AppComponent, CallsComponent, CasesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HeaderModule,
    BasicInfoModule,
    DepartmentInfoModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
