import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ResumenComponent } from './components/resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ContactoComponent,
    PortafolioComponent,
    ResumenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
