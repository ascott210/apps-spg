import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallsService {
  constructor() {}

  getCalls() {
    return of(calls);
  }
}

const calls = [
  {
    time: '06-15-2018 @ 3:15pm',
    contact: 'Charollte Meyer',
    subject: 'Fox Question',
  },
  {
    time: '06-15-2018 @ 3:15pm',
    contact: 'Brian Jones',
    subject: 'Invoice ?',
  },
  {
    time: '06-15-2018 @ 3:15pm',
    contact: 'Charollte Meyer',
    subject: 'Fox Question',
  },
  {
    time: '06-15-2018 @ 3:15pm',
    contact: 'Charollte Meyer',
    subject: 'Fox Question',
  },
];
