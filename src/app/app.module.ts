import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HeaderComponent
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
