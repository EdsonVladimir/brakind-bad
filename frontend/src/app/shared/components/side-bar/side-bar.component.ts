import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  usuario:any = {};
  customOptions: Array<any> = []
  constructor(private router: Router) { }

  ngOnInit(): void {

    this.customOptions = [
      {
        name: 'Personajes',
        router: ['/inicio/personaje']
      },
      {
        name: 'Editar Perfil',
        router: ['/inicio/editar']
      }
    ]
    const usuarioAux:any = localStorage.getItem('usuario');
    this.usuario = JSON.parse(usuarioAux)

  }
  cerrarSesion(){
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }
}
