import { Component, OnInit } from '@angular/core';
import { Language }            	from '../language';
@Component({
  selector: 'app-languages-even-odd-index',
  templateUrl: './languages-even-odd-index.component.html',
  styles: ['.even{color:#26a69a;}','.odd{color:#26a69a;background-color: #26a69a3b;}']
})
export class LanguagesEvenOddIndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    languageList = [
		new Language('Server Side', 'C'),
		new Language('Server Side', 'C++'),
		new Language('Server Side', 'Java'),
		new Language('Server Side', 'Python'),
		new Language('Client Side', 'JavaScript'),
		new Language('Client Side', 'ActionScript'),
    ];
	
    myLanguageList = this.languageList;

}
