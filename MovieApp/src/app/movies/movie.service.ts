import { EventEmitter,Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Movie } from './movie.model';  

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieSelected = new EventEmitter<Movie>();
  
  url = 'https://localhost:44363/api';  
  constructor(private http: HttpClient) { }  
  getAllMovies(): Observable<Movie[]> {  
    return this.http.get<Movie[]>(this.url + '/movies');  
  }  
  
  // getMovieById(id: number): Observable<Movie> {  
  //   return this.http.get<Movie>(this.url + '/GetEmployeeDetailsById/' + id);  
  // }  
//   createEmployee(employee: Movie): Observable<Employee> {  
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
//     return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
//     employee, httpOptions);  
//   }  
//   updateEmployee(employee: Employee): Observable<Employee> {  
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
//     return this.http.put<Employee>(this.url + '/UpdateEmployeeDetails/',  
//     employee, httpOptions);  
//   }  
//   deleteEmployeeById(employeeid: string): Observable<number> {  
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
//     return this.http.delete<number>(this.url + '/DeleteEmployeeDetails?id=' +employeeid,  
//  httpOptions);  
//   }  
}
