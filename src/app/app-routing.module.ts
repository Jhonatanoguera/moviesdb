import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieListComponent} from "./components/movies/movie-list/movie-list.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {SearchDetailComponent} from "./components/search-detail/search-detail.component";
import {ActorListComponent} from "./components/actors/actor-list/actor-list.component";
import {ShowListComponent} from "./components/shows/show-list/show-list.component";

const routes: Routes = [
  { path: 'index', component: MovieListComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'shows', component: ShowListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search/:type/:query', component: SearchDetailComponent },
  { path: 'search/:query', component: SearchDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
