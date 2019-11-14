import { Component } from '@angular/core';
import { Color } from './color';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['#ColorDiv { margin-left: 5%; }','#selectId { width: 120px; }']
})
export class AppComponent {
	
   color: string;
   selectedColor: string;
   allColors = [
    new Color('color1', 'Green'),
    new Color('color2', 'Red'),
    new Color('color3', 'Yellow')
   ] 
  onProfileChange() {
	//alert(this.selectedColor);
  }
}