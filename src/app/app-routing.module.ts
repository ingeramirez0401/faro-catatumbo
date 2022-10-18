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
import { P03Component } from './pages/convocatorias/procesos/p03/p03.component';
import { P004Component } from './pages/convocatorias/procesos/p004/p004.component';
import { P005Component } from './pages/convocatorias/procesos/p005/p005.component';
import { P006Component } from './pages/convocatorias/procesos/p006/p006.component';
import { P007Component } from './pages/convocatorias/procesos/p007/p007.component';
import { P008Component } from './pages/convocatorias/procesos/p008/p008.component';
import { P009Component } from './pages/convocatorias/procesos/p009/p009.component';
import { P010Component } from './pages/convocatorias/procesos/p010/p010.component';
import { P011Component } from './pages/convocatorias/procesos/p011/p011.component';
import { P012Component } from './pages/convocatorias/procesos/p012/p012.component';
import { P013Component } from './pages/convocatorias/procesos/p013/p013.component';

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
      { path: 'ip-fc-03-2021', component: P03Component },
      { path: 'ip-fc-04-2021', component: P004Component },
      { path: 'ip-fc-05-2021', component: P005Component },
      { path: 'ip-fc-01-2022', component: P006Component },
      { path: 'ip-fc-02-2022', component: P007Component },
      { path: 'ip-fc-03-2022', component: P008Component },
      { path: 'ip-fc-04-2022', component: P009Component },
      { path: 'ip-fc-05-2022', component: P010Component },
      { path: 'ip-fc-06-2022', component: P011Component },
      { path: 'ip-fc-07-2022', component: P012Component },
      { path: 'ip-fc-08-2022', component: P013Component },

      { path: '**', pathMatch: 'full', redirectTo: 'ip-fc-08-2022' }
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
