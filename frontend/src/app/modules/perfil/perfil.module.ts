import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './pages/editar/editar.component';
import {PerfilRoutingModule} from "@modules/perfil/perfil-routing.module";



@NgModule({
  declarations: [
    EditarComponent
  ],
  imports: [
    CommonModule,
    PerfilRoutingModule
  ]
})
export class PerfilModule { }
