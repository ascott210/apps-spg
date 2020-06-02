import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CasesService } from './cases.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css'],
})
export class CasesComponent implements OnInit {
  departments = ['Programming', 'Broadband', 'Purchasing', 'Marketing'];
  staff = ['Bob', 'Jim', 'Jill'];
  priorities = ['Normal', 'Urgent', 'Emergency'];
  statuses = ['Open', 'Canceled', 'Closed'];
  cases$: Observable<any>;
  displayedColumns: string[] = ['time', 'contact', 'subject'];

  constructor(private cases: CasesService) {}

  ngOnInit(): void {
    this.cases$ = this.cases.getCases();
  }
}
