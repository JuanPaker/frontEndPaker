import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'animate.css';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { AptitudesComponent } from './components/aptitudes/aptitudes.component';
import { BannerComponent } from './components/banner/banner.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperLaboralComponent } from './components/exper-laboral/exper-laboral.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { LogoArgProgComponent } from './components/logo-arg-prog/logo-arg-prog.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RedesSocialesComponent } from './components/redes-sociales/redes-sociales.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AcercaDeComponent,
    AptitudesComponent,
    BannerComponent,
    EducacionComponent,
    ExperLaboralComponent,
    EncabezadoComponent,
    InicioSesionComponent,
    LogoArgProgComponent,
    PorfolioComponent,
    ProyectosComponent,
    RedesSocialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
