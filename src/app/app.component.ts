import { Component, VERSION } from '@angular/core';
import { SubService } from './sub.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public service: SubService) {}
  emitData() {
    this.service.ser.next(123);
    this.service.ser.next(1234);
    this.service.ser.next(1235);
    this.service.ser.next(1236);
  }
}
