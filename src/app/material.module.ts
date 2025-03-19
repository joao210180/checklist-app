import { NgModule } from '@angular/core';
import {MatToolbarModule  } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'; // Importe o MatSidenavModule
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { Component } from '@angular/core';

@NgModule({

  declarations: [
       // FooterComponent // Adicione o FooterComponent aqui
  ],

  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule, // Adicione o MatSidenavModule aqui
    MatListModule,
    MatDividerModule,
    MatCardModule,
  
    MatButtonModule
  ],

  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule, // Exporte o MatSidenavModule aqui
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule
  
  ],

})
export class MaterialModule { }
