import { Component, OnInit } from '@angular/core';
import { Language }            	from '../language';
@Component({
  selector: 'app-languages-first-and-last-index',
  templateUrl: './languages-first-and-last-index.component.html',
  styles: ['.first{color: #26a69a;background-color: #26a69a3b;}','.last{color: #26a69a;background-color: #26a69a3b;}']
})
export class LanguagesFirstAndLastIndexComponent implements OnInit {

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
