import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentInfoComponent } from './department-info.component';
import { PurchasingComponent } from './purchasing/purchasing.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { ProgrammingComponent } from './programming/programming.component';
import { MarketingComponent } from './marketing/marketing.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [
    DepartmentInfoComponent,
    PurchasingComponent,
    BroadbandComponent,
    ProgrammingComponent,
    MarketingComponent,
  ],
  exports: [
    DepartmentInfoComponent,
    PurchasingComponent,
    BroadbandComponent,
    ProgrammingComponent,
    MarketingComponent,
  ],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class DepartmentInfoModule {}
