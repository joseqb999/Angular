import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'] ,
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {
  selectedMovie: Movie;

  constructor(private movieService:MovieService) { } 

  ngOnInit() {
    this.movieService.movieSelected
      .subscribe(
        (movie: Movie) => {
          this.selectedMovie = movie;
        }
      );
  }

}
