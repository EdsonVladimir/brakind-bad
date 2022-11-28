import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesAllComponent } from './page/personajes-all/personajes-all.component';
import {PersonajesRoutingModule} from "@modules/personajes/personajes-routing.module";



@NgModule({
  declarations: [
    PersonajesAllComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
