import { Component, OnInit } from '@angular/core';
import { BasicInfoService } from './basic-info.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css'],
})
export class BasicInfoComponent implements OnInit {
  memberInfo$;
  agreements$;
  systems$;
  employees$;
  nctcStaffAssignments$;
  boardCommittee$;

  constructor(private info: BasicInfoService) {}

  ngOnInit(): void {
    this.memberInfo$ = this.info.getMemberInfo();
    this.agreements$ = this.info.getAgreements();
    this.systems$ = this.info.getSystems();
    this.employees$ = this.info.getEmployees();
    this.nctcStaffAssignments$ = this.info.getNctcStaffAssignments();
    this.boardCommittee$ = this.info.getBoardCommittee();
  }
}
