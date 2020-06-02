import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentInfoService {
  constructor() {}

  getPurchasingInfo() {
    return of(purchasingInfo);
  }

  getBroadbandInfo() {
    return of(broadbandInfo);
  }

  getProgrammingInfo() {
    return of(programmingInfo);
  }

  getMarketingInfo() {
    return of(marketingInfo);
  }
}

const purchasingInfo = [
  { key: 'NCTC Contact:', value: 'Pauline Njuguana' },
  { key: 'Member Contact:', value: 'Bob Bobson' },
  { key: 'Annual Spend:', value: '$512,251.32' },
  { key: 'Balance Due:', value: '$20,125.65' },
  { key: 'OEM Spend:', value: '#1 Cisco ($1,200k' },
  { key: '', value: '#2 Arris ($750k)' },
  { key: '', value: '#3 Sony ($102k)' },
  { key: '', value: '#4 Something ($34k)' },
  { key: '', value: '#5 Something Else ($4k)' },
  { key: 'Open Orders:', value: '1928-0CA on 6/20/2019' },
  { key: '', value: '2192-BCD on 6/14/2019' },
  { key: '', value: '2192-BCD on 6/14/2019' },
  { key: '', value: '2192-BCD on 6/14/2019' },
  { key: '', value: '2192-BCD on 6/14/2019' },
];

const broadbandInfo = [
  { key: 'NCTC Contact:', value: 'Eric Markowicz' },
  { key: 'Member Contact:', value: 'Bob Bobson' },
  { key: 'Balance Due:', value: '$182,082.01' },
  { key: 'Cogent:', value: '4' },
  { key: 'Zayo:', value: '10' },
  { key: 'Windstream:', value: '0' },
  { key: 'Direct to Carrier:', value: '6' },
  { key: 'Cogent:', value: '4' },
  { key: 'Zayo:', value: '10' },
  { key: 'Windstream:', value: '0' },
  { key: 'Direct to Carrier:', value: '6' },
];

const programmingInfo = [
  { key: 'NCTC Contact:', value: 'Karen Winters' },
  { key: 'Balance Due:', value: '$182,082.01' },
  { key: 'Systems:', value: 'Hooper, IA' },
  { key: '', value: 'Louisburg, KS' },
  { key: '', value: 'Stone Valley, MO' },
  { key: 'Renewals', value: true, open: 2 },
  { key: 'PCM', value: false, open: 3 },
  { key: 'VUIT!', value: true, open: 0 },
  { key: 'MobiTV', value: false, open: 0 },
  { key: 'WTVE', value: true, open: 0 },
];

const marketingInfo = [
  { key: 'NCTC Contact:', value: 'Lisa Miller' },
  { key: '2019 - WEC:', value: '5' },
  { key: '2019 - TIS:', value: '10' },
  { key: '2018 - WEC:', value: '1' },
  { key: '2018 - WEC:', value: '0' },
  { key: '2018 - Region 5:', value: '0' },
  { key: 'Turner', value: true },
  { key: 'Plume', value: true },
  { key: 'Zayo', value: true },
  { key: 'Cogent', value: false },
];
