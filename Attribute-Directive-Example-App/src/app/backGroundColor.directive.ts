import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBackGroundColor]'
})
export class BackGroundColorDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appBackGroundColor') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
	
    this.el.nativeElement.style.backgroundColor = color;
  }
}
