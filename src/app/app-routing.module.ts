import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { Erro404Component } from './pages/erro404/erro404.component';
import { DetalleProyectoComponent } from './pages/detalle-proyecto/detalle-proyecto.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'proyectos', component: ProyectosComponent},
  { path: 'contacto', component: ContactoComponent },
  { path: 'proyectos/:idproyectos', component: DetalleProyectoComponent},

  { path: "", redirectTo:'home', pathMatch:'full'},
  { path: "**", component: Erro404Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
