import { Component, Input } from '@angular/core';
import { SubService } from './sub.service';

@Component({
  selector: 'hello',
  template: `
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  constructor(public ser: SubService) {}
  ngOnInit() {
    this.ser.ser.subscribe((data: number) => {
      console.log(data);
    });
  }
}
