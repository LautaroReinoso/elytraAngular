import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageComponent } from './components/header/image/image.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompositionsComponent } from './components/work/compositions/compositions.component';
import { VideogamesComponent } from './components/work/videogames/videogames.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageComponent,
    AboutmeComponent,
    WorkComponent,
    ContactComponent,
    CompositionsComponent,
    VideogamesComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
