import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef } from '@angular/core';
import {AppComponent} from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { D3Service } from 'd3-ng2-service';
import { D3MapComponent } from './d3-map/d3-map.component';

@NgModule({
  declarations: [
    AppComponent,
    D3MapComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [D3Service], // <-- provider registration
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
