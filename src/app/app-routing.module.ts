import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./components/movies/movie-list/movie-list.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SearchDetailComponent} from "./components/search-detail/search-detail.component";
import {ActorListComponent} from "./components/actors/actor-list/actor-list.component";
import {ShowListComponent} from "./components/shows/show-list/show-list.component";
import {MovieDetailsComponent} from "./components/movies/movie-details/movie-details.component";
import {ActorDetailsComponent} from "./components/actors/actor-details/actor-details.component";
import {ShowDetailsComponent} from "./components/shows/show-details/show-details.component";

const routes: Routes = [
  { path: 'index', component: MovieListComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'shows', component: ShowListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search/:type/:query', component: SearchDetailComponent },
  { path: 'search/:query', component: SearchDetailComponent },
  { path: 'movie_det/:id', component: MovieDetailsComponent },
  { path: 'actor_det/:id', component: ActorDetailsComponent },
  { path: 'show_det/:id', component: ShowDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
