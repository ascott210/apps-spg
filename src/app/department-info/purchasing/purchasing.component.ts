import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchasing',
  templateUrl: './purchasing.component.html',
  styleUrls: ['./purchasing.component.css'],
})
export class PurchasingComponent implements OnInit {
  @Input() purchasingInfo: any;

  constructor() {}

  ngOnInit(): void {}
}
