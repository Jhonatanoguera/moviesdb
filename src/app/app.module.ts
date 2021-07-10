import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    HeaderComponent,
    MovieCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
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
    TagModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
