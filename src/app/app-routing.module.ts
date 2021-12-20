import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtencionCiudadanoComponent } from './pages/atencion-ciudadano/atencion-ciudadano.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ConvocatoriasComponent } from './pages/convocatorias/convocatorias.component';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { HomeComponent } from './pages/home/home.component';
import { LineasServicioComponent } from './pages/lineas-servicio/lineas-servicio.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { BancoOferentesComponent } from './pages/convocatorias/banco-oferentes/banco-oferentes.component';
import { ProcesosComponent } from './pages/convocatorias/procesos/procesos.component';
import { P001Component } from './pages/convocatorias/procesos/p001/p001.component';
import { P02Component } from './pages/convocatorias/procesos/p02/p02.component';

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
    path: 'procesos',
    component: ProcesosComponent,
    children: [
      { path: 'ip-fc-01-2021', component: P001Component },
      { path: 'ip-fc-02-2021', component: P02Component },
      { path: '**', pathMatch: 'full', redirectTo: 'ip-fc-01-2021' }
    ]
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
    path: 'convocatorias',
    component: ConvocatoriasComponent,
    children: [
        { path: 'banco-oferentes', component: BancoOferentesComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'banco-oferentes' }
    ]
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
      useHash: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
