import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { QueHacemosComponent } from './components/que-hacemos/que-hacemos.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FooterComponent } from './components/footer/footer.component';
import { NiniasComponent } from './components/portfolio/ninias/ninias.component';
import { PackRPGComponent } from './components/portfolio/pack-rpg/pack-rpg.component';
import { EpiphanyComponent } from './components/portfolio/epiphany/epiphany.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarrouselComponent,
    NosotrosComponent,
    QueHacemosComponent,
    PortfolioComponent,
    FooterComponent,
    NiniasComponent,
    PackRPGComponent,
    EpiphanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
