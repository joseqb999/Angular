import { Injectable } from '@angular/core';
import { Actor } from "./actor.model"
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  formData: Actor;
  list: Actor[];
  readonly rootURL = "https://localhost:44363/api"

  constructor(private http: HttpClient) { }

  //refreshList() {
  //  this.http.get(this.rootURL + '/people')
  //    .toPromise().then(res => this.list = res as Actor[]);
  //}

  getActor(): Observable<any> {
    var userid = JSON.parse(localStorage.getItem('user'));
    //console.log(this.http.get<any>(this.rootURL + '/people/' + userid["userID"]));
    return this.http.get(this.rootURL + '/people/' + userid["userID"]);
  }

  putActor(formData: Actor) {
    var userid = JSON.parse(localStorage.getItem('user'));
    formData["Picture"] = "";
    console.log(formData);
    return this.http.put(this.rootURL + '/people/' + userid["userID"], formData);
  }
  getActorMovies(): Observable<any>{
    var userid = JSON.parse(localStorage.getItem('user'));
    return this.http.get(this.rootURL + '/moviesactors/' + userid["userID"]);
  }
}
