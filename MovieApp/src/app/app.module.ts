import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movies/movie.service';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ErrorInterceptor } from './_helpers/error.interceptor';
import { AdminComponent } from './admin/admin.component';
import { ActorComponent } from './actor/actor.component';
import { EditActorComponent } from './actor/edit-actor/edit-actor.component';
import { ViewActorMoviesComponent } from './actor/view-actor-movies/view-actor-movies.component';
import { CreateactorComponent } from './admin/createactor/createactor.component';
import { EditactorComponent } from './admin/editactor/editactor.component';
import { DeleteactorComponent } from './admin/deleteactor/deleteactor.component';
import { CreatemovieComponent } from './admin/createmovie/createmovie.component';
import { EditmovieComponent } from './admin/editmovie/editmovie.component';
import { DeletemovieComponent } from './admin/deletemovie/deletemovie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieItemComponent,
    LoginComponent,
    AdminComponent,
    ActorComponent,
    EditActorComponent,
    ViewActorMoviesComponent,
    CreateactorComponent,
    EditactorComponent,
    DeleteactorComponent,
    CreatemovieComponent,
    EditmovieComponent,
    DeletemovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    HttpClientModule,
    MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
