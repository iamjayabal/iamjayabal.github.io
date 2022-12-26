import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[mousehoverevent]',
})
export class MousehovereventDirective {
  @Output() hover = new EventEmitter();

  constructor() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover.emit();
  }
}
