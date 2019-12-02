import { Component, OnInit } from '@angular/core';
import { Language }            	from '../language';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styles: []
})
export class LanguagesComponent implements OnInit {
  
  constructor() {}

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
