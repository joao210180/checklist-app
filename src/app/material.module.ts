import { NgModule } from '@angular/core';
import {MatToolbarModule  } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav'; // Importe o MatSidenavModule
import { MatCheckboxModule } from '@angular/material/checkbox'; // Importe o MatCheckboxModule
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({

  declarations: [
       // FooterComponent // Adicione o FooterComponent aqui
  ],

  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule, // Adicione o MatSidenavModule aqui
    MatCheckboxModule, // Adicione o MatCheckboxModule aqui
    MatListModule,
    MatDividerModule
  ],

  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    //FooterComponent
    MatSidenavModule, // Exporte o MatSidenavModule aqui
    MatCheckboxModule, // Exporte o MatCheckboxModule aqui
    MatListModule,
    MatDividerModule
  ],

})
export class MaterialModule { }
