import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CallsService } from './calls.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css'],
})
export class CallsComponent implements OnInit {
  calls$: Observable<any>;
  callTypes = ['call1', 'call2', 'call3'];
  displayedColumns: string[] = ['time', 'contact', 'subject'];

  constructor(private calls: CallsService) {}

  ngOnInit(): void {
    this.calls$ = this.calls.getCalls();
  }
}
