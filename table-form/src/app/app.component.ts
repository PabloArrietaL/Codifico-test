import { Component } from '@angular/core';
import { Movie } from './model/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public movies: Array<Movie> = [];

  addMovie(movie: any): void {
    console.log(movie);
    this.movies.push(movie);
  }

  deletesMovie(index: any): void {
    this.movies.splice(index, 1);
  }

}
