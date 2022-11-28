import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
const routes: Routes = [
  {
    path: 'auth', //TODO (Public) Login, Registro
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },{
    path: '',
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule),
    canActivate: [SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { useHash: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
