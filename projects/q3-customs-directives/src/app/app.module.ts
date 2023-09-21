import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { HighlightDirective } from './highlight.directive';
import { DisplayFilmsDirective } from './display-films.directive';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    HighlightDirective,
    DisplayFilmsDirective,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
