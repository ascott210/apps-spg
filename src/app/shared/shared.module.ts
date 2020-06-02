import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { GridDirective } from './grid.directive';

@NgModule({
  declarations: [TableComponent, GridDirective],
  exports: [TableComponent, GridDirective],
  imports: [CommonModule],
})
export class SharedModule {}
