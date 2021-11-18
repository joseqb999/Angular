import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';  
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  allMovies: Observable<Movie[]>;  
  movieList: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {   
    this.loadAllMovies();  
  }  
  loadAllMovies() {  
    // this.allMovies = this.movieService.getAllMovies();
    // console.log(this.allMovies);
    // console.log();  
    this.movieService.getAllMovies().subscribe(movies => this.movieList = movies);
    console.log(this.movieList,"MovieList");
  } 
}
