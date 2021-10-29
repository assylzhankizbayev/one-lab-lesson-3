import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardExpPipe } from './pipes/card-exp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardExpPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CardExpPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
