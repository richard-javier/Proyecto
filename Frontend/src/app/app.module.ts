import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/ForgotPasswordComponent/forgot-password.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaRegistroComponent } from './components/Lista-registros/lista-registro.component';
import { ClientesComponent } from './components/Cliente/clientes.component';
import { CompraComponent } from './components/Compra/compra.component';
import { ProductoComponent } from './components/Producto/producto.component';
import { VentaComponent } from './components/Venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    ListaRegistroComponent,
    ClientesComponent,
    CompraComponent,
    ProductoComponent,
    VentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
