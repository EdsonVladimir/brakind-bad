import { Component, OnInit } from '@angular/core';
import {UsuarioEditService} from "../../services/editar.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "@modules/auth/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});
  usuario:any={
    nombre:"",
    nickname:"",
    img:""
  }
  errores = [{msg: "El nickname esosa ya se encuentra registrado"}];
  constructor(private authService: AuthService, private router: Router, private service:UsuarioEditService) { }
  ngOnInit(): void {
    this.obtenerUsurio();
    this.formLogin = new FormGroup(
      {
        par_nombre: new FormControl('', [
          Validators.required
        ]),
        par_email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        par_contrasenia: new FormControl('',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20)
          ]),
        par_nickname: new FormControl('',
          [
            Validators.required
          ])
      }
    )
  }
  sendRegsitro(): void {
    this.authService.registrarUsuario(this.formLogin.value)
      .subscribe(res => {
          const { token, usuario } = res
          localStorage.setItem('token', token) //TODO:📌📌📌📌
          localStorage.setItem('usuario', JSON.stringify(usuario))
          //this.router.navigate(['/', 'tracks'])
          this.router.navigate(['/auth/login'])
        },
        err => {
          this.errorSession = true
          this.errores=err.error.errors;
        })

  }
  cerrar(){
    this.errorSession = false;
  }
  obtenerUsurio(){
    this.service.obtenerEditUsuario().subscribe(
      res=>{
        this.usuario = res.contenido
        this.formLogin.value.pa_nombre= this.usuario.nombre;
      }
    )
  }

}
