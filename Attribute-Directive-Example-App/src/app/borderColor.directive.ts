import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appBorderColor') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBorderColor(this.borderColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBorderColor('');
  }

  private changeBorderColor(color: string) {
	if(color)
		this.el.nativeElement.style.border = '1px '+color+' solid';
	else
		this.el.nativeElement.style.border = 'none';
	
  }
}
