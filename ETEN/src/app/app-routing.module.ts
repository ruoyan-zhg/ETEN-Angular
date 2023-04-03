import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { InfoRecetaComponent } from './views/info-receta/info-receta.component';
import { EstadisticasAdminComponent } from './views/estadisticas-admin/estadisticas-admin.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { BuscadorCategoriaComponent } from './views/buscador-categoria/buscador-categoria.component';
import { BuscadorIngredienteComponent } from './views/buscador-ingrediente/buscador-ingrediente.component';
import { BuscadorTituloComponent } from './views/buscador-titulo/buscador-titulo.component';
import { OfertasComponent } from "./views/ofertas/ofertas.component";



const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'index', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'sign-up', component:SignUpComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'info-receta', component:InfoRecetaComponent},
  {path: 'estadisticas', component: EstadisticasAdminComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'buscador-categoria', component:BuscadorCategoriaComponent},
  {path: 'buscador-ingrediente', component:BuscadorIngredienteComponent},
  {path: 'buscador-titulo', component:BuscadorTituloComponent},
  {path: 'ofertas', component:OfertasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
