import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef } from '@angular/core';
import {AppComponent} from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { D3Service } from 'd3-ng2-service';

@NgModule({
  declarations: [
    AppComponent
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
