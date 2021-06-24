import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Movie } from 'src/app/model/movie.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Input() movies: Array<Movie> = [];
  @Output() sendIndex: EventEmitter<number> = new EventEmitter();

  public sort: string = 'desc';


  deleteMovie(index: number) {
    this.sendIndex.emit(index);
  }

  sortArray() {
    if (this.sort == 'desc') {
      this.movies.sort((a, b) => a.year - b.year);
      this.sort = 'asc';
    } else {
      this.movies.sort((a, b) => b.year - a.year);
      this.sort = 'desc';
    }

  }

}
