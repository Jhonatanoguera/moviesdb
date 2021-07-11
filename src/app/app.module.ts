import {Input, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import {MenubarModule} from "primeng/menubar";
import {SharedModule} from "primeng/api";
import {CardModule} from "primeng/card";
import {DataViewModule} from "primeng/dataview";
import {DividerModule} from "primeng/divider";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {TagModule} from "primeng/tag";
import { MovieCardComponent } from './components/movies/movie-card/movie-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import { SearchComponent } from './components/search/search.component';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { TabViewModule} from "primeng/tabview";
import { ShowCardComponent } from './components/shows/show-card/show-card.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {TooltipModule} from "primeng/tooltip";
import { ActorCardComponent } from './components/actors/actor-card/actor-card.component';
import { ActorListComponent } from './components/actors/actor-list/actor-list.component';
import { ShowListComponent } from './components/shows/show-list/show-list.component';
import {RatingModule} from "primeng/rating";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    MovieCardComponent,
    DashboardComponent,
    SearchComponent,
    SearchDetailComponent,
    ShowCardComponent,
    ActorCardComponent,
    ActorListComponent,
    ShowListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    AppRoutingModule,
    MenubarModule,
    SharedModule,
    CardModule,
    DataViewModule,
    DividerModule,
    ScrollPanelModule,
    ProgressSpinnerModule,
    TagModule,
    InputTextModule,
    FormsModule,
    TabViewModule,
    InputSwitchModule,
    TooltipModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
