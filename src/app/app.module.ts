import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HeroDatabaseService } from './hero-database.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Importing Heroes components
import { HeroesComponent } from './hero/heroes.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './search/hero-search.component';
import { HeroDetailComponent} from "./detail/hero-detail.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeroDetailComponent,
    InMemoryWebApiModule.forRoot(HeroDatabaseService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
