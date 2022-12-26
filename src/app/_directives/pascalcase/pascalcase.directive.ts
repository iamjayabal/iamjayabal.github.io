import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[pascalCase]',
  // standalone: true,
})
export class PascalcaseDirective implements OnInit {
  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.el.nativeElement.innerText = this.toPascalCase(
      this.el.nativeElement.innerText
    );
  }

  toPascalCase(str: string) {
    return str.toLowerCase().replace(/(?:(^.)|(\s+.))/g, (match) => {
      return (
        match
          .charAt(match.length - 1)
          .toUpperCase()
          // insert a space before all caps
          .replace(/([A-Z])/g, ' $1')
          // uppercase the first character
          .replace(/^./, (res: string) => res.toUpperCase())
      );
    });
  }
}
