import { Component, OnInit } from '@angular/core';
import {PersonajeService} from "../../services/personaje.service";

@Component({
  selector: 'app-personajes-all',
  templateUrl: './personajes-all.component.html',
  styleUrls: ['./personajes-all.component.css']
})
export class PersonajesAllComponent implements OnInit {
  personajes: Array<any> = []
  constructor(private service:PersonajeService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }
  obtenerPersonajes(){
   this.service.obtenerPersonajes().subscribe(
     res=>{
       this.personajes = res;
       console.log(this.personajes)
     }
   )
  }
}
