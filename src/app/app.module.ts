import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HttpClientModule} from '@angular/common/http';
import {AppShellRenderDirective} from "./directives/app-shell-render.directive";
import {AppShellNoRenderDirective} from "./directives/app-shell-norender.directive";

// Components
import {AppComponent} from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';

// Pipes
import { FeaturedNewPipe } from './pipes/featured-new.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { OrganigramaComponent } from './pages/organigrama/organigrama.component';
import { LineasServicioComponent } from './pages/lineas-servicio/lineas-servicio.component';
import { TransparenciaComponent } from './pages/transparencia/transparencia.component';
import { AtencionCiudadanoComponent } from './pages/atencion-ciudadano/atencion-ciudadano.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


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
    ContactoComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
