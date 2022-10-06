import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Link1Component } from './link1/link1.component';
import { Link2Component } from './link2/link2.component';
import { Link4Component } from './link4/link4.component';

import { Router, RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Link1Component,
    Link2Component,
    Link4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "Link1", component:Link1Component },
      {path: "Link2", component:Link2Component },
      {path: "Link4", component:Link4Component },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
