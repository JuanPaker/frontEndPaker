import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';

const routes: Routes = [
  {path: 'porfolio',component:PorfolioComponent},
  {path: 'inicio-sesion',component:InicioSesionComponent},
  {path: '', redirectTo: 'inicio-sesion', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
