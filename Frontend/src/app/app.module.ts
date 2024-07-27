import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component'; // Corrige la ruta aquí

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule // Agrega HttpClientModule aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

