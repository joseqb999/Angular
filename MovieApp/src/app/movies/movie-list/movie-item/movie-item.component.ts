import { Component, OnInit, Input } from '@angular/core';  
import { FormBuilder, Validators } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { MovieService } from '../../movie.service';  
import { Movie } from '../../movie.model';  

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

  export class MovieItemComponent implements OnInit {  
    @Input() movie: Movie;
    // dataSaved = false;  
    // movieForm: any;  
    // allMovies: Observable<Movie[]>;  
    // movieList: Movie[];
    
    constructor(private movieService:MovieService) { }  

    ngOnInit() {   
      //this.loadAllMovies();
      console.log(this.movie);
    }  
    // loadAllMovies() {  
    //   // this.allMovies = this.movieService.getAllMovies();
    //   // console.log(this.allMovies);
    //   // console.log();  
    //   this.movieService.getAllMovies().subscribe(movies => this.movieList = movies);
    //   console.log(this.movieList);
    // } 

    onSelected() {
      console.log("clicked 1");
      console.log(this.movie);
      this.movieService.movieSelected.emit(this.movie);
      console.log(this.movieService.movieSelected);
    }
    
  }
