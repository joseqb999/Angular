import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  movieSelected: number;
  actorSelected: string;
  formData: any;
  readonly rootURL = "https://localhost:44363/api"

  constructor(private http: HttpClient) { }

  postMovie(formData: any) {
    return this.http.post(this.rootURL + '/movies', formData);
  }

  putMovie(formData: any) {
    return this.http.put(this.rootURL + '/movies/' + this.movieSelected, formData);
  }

  putActor(formData: any) {
    return this.http.put(this.rootURL + '/people/' + this.actorSelected, formData);
  }

  deleteMovie(MovieId: number) : Observable<any>{
    return this.http.delete(this.rootURL + '/movies/' + MovieId);
  }

  deleteActor(PersonId: number): Observable<any> {
    return this.http.delete(this.rootURL + '/people/' + PersonId);
  }

  postActor(formData: any) {
    console.log(formData);
    return this.http.post(this.rootURL + '/accounts/Create', formData);
  }

  getAllMovies(): Observable<any> {
    return this.http.get(this.rootURL + '/movies/');
  }

  getAllPeople(): Observable<any> {
    return this.http.get(this.rootURL + '/people/');
  }

  getMovieByMovieId(): Observable<any> {
    return this.http.get(this.rootURL + '/movies/' + this.movieSelected);
  }

  getActorByActorId(): Observable<any> {
    return this.http.get(this.rootURL + '/people/' + this.actorSelected);
  }
}
