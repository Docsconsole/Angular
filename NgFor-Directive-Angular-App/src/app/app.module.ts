import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanguagesComponent } from './languages/languages.component';
import { LanguagesWithIndexComponent } from './languages-with-index/languages-with-index.component';
import { LanguagesFirstAndLastIndexComponent } from './languages-first-and-last-index/languages-first-and-last-index.component';
import { LanguagesEvenOddIndexComponent } from './languages-even-odd-index/languages-even-odd-index.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguagesWithIndexComponent,
    LanguagesFirstAndLastIndexComponent,
    LanguagesEvenOddIndexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LanguagesComponent, LanguagesWithIndexComponent, LanguagesFirstAndLastIndexComponent, LanguagesEvenOddIndexComponent]
})
export class AppModule { }
