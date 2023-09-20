import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayFilmsDirective } from './display-films.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    HighlightDirective,
    DisplayFilmsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
