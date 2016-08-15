import {Component, ElementRef, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'time-picker',
  templateUrl: 'time-picker.component.html',
  styles: [``]
})
export class TimePicker {

  elementRef: ElementRef;
  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }
  ngOnInit() {
    jQuery(this.elementRef.nativeElement).pickatime({
      autoclose: false,
      twelvehour: false
    });
  }

}
