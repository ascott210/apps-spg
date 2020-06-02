import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css'],
})
export class ProgrammingComponent implements OnInit {
  @Input() programmingInfo: any;

  constructor() {}

  ngOnInit(): void {}
}
