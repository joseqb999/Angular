import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { ActorService } from "../actor.service"

@Component({
  selector: 'app-view-actor-movies',
  templateUrl: './view-actor-movies.component.html',
  styleUrls: ['./view-actor-movies.component.css']
})
export class ViewActorMoviesComponent implements OnInit {
  actorMovies: any = [];
  constructor(private service: ActorService) { }

  ngOnInit(): void {
    this.getActorMoviesList();
  }

  getActorMoviesList() {
    this.service.getActorMovies().subscribe((response) => {
      //this.actorMovies = []
      this.actorMovies.push(response)
    });
    console.log(this.actorMovies);
  }
}
