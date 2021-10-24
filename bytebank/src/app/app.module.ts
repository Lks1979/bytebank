import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgForm } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent
  ],
  imports: [
    BrowserModule,
    NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
