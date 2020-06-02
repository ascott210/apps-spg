import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css'],
})
export class MarketingComponent implements OnInit {
  @Input() marketingInfo: any;

  constructor() {}

  ngOnInit(): void {}
}
