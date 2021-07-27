import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionCiudadanoComponent } from './pages/atencion-ciudadano/atencion-ciudadano.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { HomeComponent } from './pages/home/home.component';
import { LineasServicioComponent } from './pages/lineas-servicio/lineas-servicio.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,
  },
  {
    path: 'nosotros',
    component: QuienesSomosComponent,
  },
  {
    path: 'transparencia',
    component: TransparenciaComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: 'atencion-ciudadano',
    component: AtencionCiudadanoComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
