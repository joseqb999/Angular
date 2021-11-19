import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-castactor',
  templateUrl: './castactor.component.html',
  styleUrls: ['./castactor.component.css']
})


export class CastactorComponent implements OnInit {

  moviesList: any = [];
  actorsList: any = [];
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getAllMovies();
    this.getAllPeople();
  }

  getAllPeople() {
    this.service.getAllPeople().subscribe((response) => {
      this.actorsList.push(response)
    });
    console.log(this.actorsList);
  }

  getAllMovies() {
    this.service.getAllMovies().subscribe((response) => {
      this.moviesList.push(response)
    });
    console.log(this.moviesList);
  }

  movieSelect(MovieId: number) {
    this.service.movieSelected = MovieId;
  }
  actorSelect(PersonId: string) {
    this.service.actorSelected = PersonId;
  }

  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  insertRecord(form: NgForm) {
    console.log(form);
    this.service.postMoviesActor(form.value).subscribe(res => {
      console.log(res);
    });
  }

}
