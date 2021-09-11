import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SubService {
  // ser = new BehaviorSubject<number>(5);
  ser = new ReplaySubject<number>(2);
  constructor() {}
}
