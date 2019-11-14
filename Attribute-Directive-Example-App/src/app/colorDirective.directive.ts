import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appColor') color: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changeTextColor(this.color || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeTextColor(null);
  }

  private changeTextColor(color: string) {
	this.el.nativeElement.style.color = color;
  }
}
