import { Component, OnInit, Input } from '@angular/core';
import { DepartmentInfoService } from '../department-info.service';

@Component({
  selector: 'app-broadband',
  templateUrl: './broadband.component.html',
  styleUrls: ['./broadband.component.css'],
})
export class BroadbandComponent implements OnInit {
  @Input() broadbandInfo: any;

  constructor(private dept: DepartmentInfoService) {}

  ngOnInit(): void {}
}
