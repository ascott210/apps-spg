import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [BasicInfoComponent],
  exports: [BasicInfoComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class BasicInfoModule {}
