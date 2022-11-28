import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from "./pages/inicio/inicio.component";


const routes: Routes = [
  {
    path: 'inicio',
    component:InicioComponent,
    children:[
      {
        path: 'personaje',
        loadChildren:()=>import('@modules/personajes/personajes.module').then(m => m.PersonajesModule)
      },
      {
        path: 'editar',
        loadChildren:()=>import('@modules/perfil/perfil.module').then(m => m.PerfilModule)
      },
      {
        path: '**',
        redirectTo: 'personaje'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
