import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module'; // Importe o MaterialModule
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule // Adicione o MaterialModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
