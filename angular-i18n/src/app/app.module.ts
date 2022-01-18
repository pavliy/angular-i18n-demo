import '@angular/localize/init';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TranslateSampleComponent } from './translate-sample/translate-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    TranslateSampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }