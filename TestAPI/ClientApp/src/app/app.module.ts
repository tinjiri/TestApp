import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PersonAddComponent } from './person-add/person-add.component';
import { PersonListComponent } from './person-list/person-list.component';
import { Sort } from './models/Sort';
import { SortDirective } from './directive/sort.directive';
//import {Sort } from ''

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PersonListComponent,
    PersonAddComponent,
    SortDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      //{ path: '', component: PersonListComponent, pathMatch: 'full' },
    { path: '', component: PersonListComponent, pathMatch: 'full' },
    { path: 'counter', component: CounterComponent },
    { path: 'fetch-data', component: FetchDataComponent },
    { path: 'personlist', component: PersonListComponent },
    { path: 'addperson', component: PersonAddComponent },
], { relativeLinkResolution: 'legacy' })
  ],
  providers: [Sort],
  bootstrap: [AppComponent]
})
export class AppModule { }
