import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MapaGoogleComponent } from './components/mapa-google/mapa-google.component';
import { MapaOpenComponent } from './components/mapa-open/mapa-open.component';
import { Tabla1Component } from './components/tabla1/tabla1.component';
import { Tabla2Component } from './components/tabla2/tabla2.component';
import { Erro404Component } from './pages/erro404/erro404.component';
import { DetalleProyectoComponent } from './pages/detalle-proyecto/detalle-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    TablaComponent,
    CardComponent,
    NavBarComponent,
    FooterComponent,
    FormularioComponent,
    HomeComponent,
    SobreMiComponent,
    ProyectosComponent,
    ContactoComponent,
    MapaGoogleComponent,
    MapaOpenComponent,
    Tabla1Component,
    Tabla2Component,
    Erro404Component,
    DetalleProyectoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
