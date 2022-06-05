import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ServicesService } from '../app/services/services.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ResumenComponent } from './components/resumen/resumen.component';
import { PortafoliocarruselComponent } from './components/portafoliocarrusel/portafoliocarrusel.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ContactoComponent,
    PortafolioComponent,
    ResumenComponent,
    PortafoliocarruselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
