import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppShellRenderDirective } from './directives/app-shell-render.directive';
import { AppShellNoRenderDirective } from './directives/app-shell-norender.directive';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { LineasServicioComponent } from './pages/lineas-servicio/lineas-servicio.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { AtencionCiudadanoComponent } from './pages/atencion-ciudadano/atencion-ciudadano.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AliadosComponent } from './pages/shared/aliados/aliados.component';

// Pipes
import { FeaturedNewPipe } from './pipes/featured-new.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { BancoOferentesComponent } from './pages/convocatorias/banco-oferentes/banco-oferentes.component';
import { ConvocatoriasComponent } from './pages/convocatorias/convocatorias.component';
import { ConfigService } from './services/config.service';
import { RegisterService } from './services/register.service';
import { ProcesosComponent } from './pages/convocatorias/procesos/procesos.component';
import { P010Component } from './pages/convocatorias/procesos/p010/p010.component';
import { P011Component } from './pages/convocatorias/procesos/p011/p011.component';
import { P012Component } from './pages/convocatorias/procesos/p012/p012.component';
import { P013Component } from './pages/convocatorias/procesos/p013/p013.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppShellRenderDirective,
    AppShellNoRenderDirective,
    FooterComponent,
    HeaderComponent,
    FeaturedNewPipe,
    SafeHtmlPipe,
    QuienesSomosComponent,
    FuncionesComponent,
    OrganigramaComponent,
    LineasServicioComponent,
    TransparenciaComponent,
    AtencionCiudadanoComponent,
    ContactoComponent,
    AliadosComponent,
    BancoOferentesComponent,
    ConvocatoriasComponent,
    ProcesosComponent,
    P010Component,
    P011Component,
    P012Component,
    P013Component
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService, ConfigService],
  bootstrap: [AppComponent],
})
export class AppModule {}
