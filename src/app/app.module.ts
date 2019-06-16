import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { StarsComponent } from './stars.component';
import { StarsDetailComponent } from './stars-detail.component';
import { StarsService } from './stars.service';
import { StarsSearchComponent } from './stars-search.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    StarsDetailComponent,
    StarsComponent,
    StarsSearchComponent
  ],
  providers: [StarsService],
  bootstrap: [AppComponent]
})
export class AppRoutingModule {}
export class AppModule {}
