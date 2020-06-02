import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasicInfoService {
  memberInfo = memberInfo;
  agreements = agreements;
  systems = systems;
  employees = employees;
  nctcStaffAssignments = nctcStaffAssignments;
  boardCommittee = boardCommittee;

  constructor() {}

  getMemberInfo() {
    return of(this.memberInfo);
  }

  getAgreements() {
    return of(this.agreements);
  }

  getSystems() {
    return of(this.systems);
  }

  getEmployees() {
    return of(this.employees);
  }

  getNctcStaffAssignments() {
    return of(this.nctcStaffAssignments);
  }

  getBoardCommittee() {
    return of(this.boardCommittee);
  }
}

const memberInfo = [
  { key: 'Member Code:', value: 'HOO010' },
  { key: 'Account Type:', value: 'Member' },
  { key: 'Status:', value: 'Active' },
  { key: 'Website:', value: 'http://hooper.com' },
  { key: 'Assoc Member:', value: 'ABC 123' },
  { key: 'Member Since:', value: '11/15/2014' },
  { key: 'Shows Attended:', value: 'TIS(6), WEC(2)' },
  { key: 'Webinars Attended:', value: '10' },
];

const agreements = [
  { key: 'Turner:', value: true },
  { key: 'Zayo:', value: true },
  { key: 'Plume:', value: true },
  { key: 'Cogent:', value: false },
];

const systems = [
  { key: '', value: 'Hooper, IA' },
  { key: '', value: 'Louisburg, KS' },
  { key: '', value: 'Stone Valley, Mo' },
];

const employees = [
  { key: 'CEO:', value: 'Dave Elton' },
  { key: 'CFO:', value: 'Tom Tomson' },
  { key: 'CIO:', value: 'Bob Bobson' },
  { key: 'AA Mgr:', value: 'Frank Franklin' },
];

const nctcStaffAssignments = [
  { key: 'Programming:', value: 'Ryan Dunn' },
  { key: 'Purchasing:', value: 'Brian Jones' },
  { key: 'Broadband:', value: 'Ed Townsend' },
];

const boardCommittee = [
  { key: 'Board Member:', value: 'Ryan Dunn' },
  { key: 'Board Member:', value: 'Brian Jones' },
  { key: 'Adv Video Adviser:', value: 'Ed Townsend' },
];
