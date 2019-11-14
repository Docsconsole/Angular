import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BackGroundColorDirective } from './backGroundColor.directive';
import { ColorDirective } from './colorDirective.directive';
import { BorderColorDirective } from './borderColor.directive';

@NgModule({
  imports: [ BrowserModule,FormsModule ],
  declarations: [
    AppComponent,
	BackGroundColorDirective,
	ColorDirective,
	BorderColorDirective
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
