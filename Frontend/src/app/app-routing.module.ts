import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/ForgotPasswordComponent/forgot-password.component';
import { ListaRegistroComponent } from './components/Lista-registros/lista-registro.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientesComponent } from './components/Cliente/clientes.component';
import { CompraComponent } from './components/Compra/compra.component';
import { ProductoComponent } from './components/Producto/producto.component';
import { VentaComponent } from './components/Venta/venta.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: ListaRegistroComponent },
  { path: 'lista-registro', component: ListaRegistroComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'compras', component: CompraComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'ventas', component: VentaComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
