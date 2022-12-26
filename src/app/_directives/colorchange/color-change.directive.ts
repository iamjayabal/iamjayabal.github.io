import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[colorChange]',
})
export class ColorChangeDirective {
  @Input() color = 'red';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.color = this.color;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.color = '';
  }
}
