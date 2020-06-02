import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentInfoService } from './department-info.service';

@Component({
  selector: 'app-department-info',
  templateUrl: './department-info.component.html',
  styleUrls: ['./department-info.component.css'],
})
export class DepartmentInfoComponent implements OnInit {
  purchasingInfo$: Observable<any>;
  broadbandInfo$: Observable<any>;
  programmingInfo$: Observable<any>;
  marketingInfo$: Observable<any>;

  constructor(private dept: DepartmentInfoService) {}

  ngOnInit(): void {
    this.purchasingInfo$ = this.dept.getPurchasingInfo();
    this.broadbandInfo$ = this.dept.getBroadbandInfo();
    this.programmingInfo$ = this.dept.getProgrammingInfo();
    this.marketingInfo$ = this.dept.getMarketingInfo();
  }
}
