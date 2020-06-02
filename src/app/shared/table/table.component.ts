import { Component, OnInit, Input } from '@angular/core';
import { TableData } from '../interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() rows: TableData[] = [];

  constructor() {}

  ngOnInit(): void {}
}
