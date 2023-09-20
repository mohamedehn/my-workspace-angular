import { Component } from '@angular/core';
import { FILMS } from '../mock-film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent {

  films  = FILMS;

  showMovies = true
}
