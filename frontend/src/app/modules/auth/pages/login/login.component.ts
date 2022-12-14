import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        par_email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        par_contrasenia: new FormControl('',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(20)
          ])
      }
    )
  }
  sendLogin(): void {
    const { par_email, par_contrasenia } = this.formLogin.value
    this.authService.sendCredentials(par_email, par_contrasenia)
      .subscribe(res => {
          console.log('Session iniciada correcta', res);
          const { token, usuario } = res
          localStorage.setItem('token', token) //TODO:📌📌📌📌
          localStorage.setItem('usuario', JSON.stringify(usuario))
          this.router.navigate(['/home/inicio'])
        },
        err => {//TODO error 400>=
          this.errorSession = true
          console.log('⚠⚠⚠⚠Ocurrio error con tu email o contraseña');
        })

  }
  registrar(){
   // console.log("hola")
    this.router.navigate(['/auth/registry'])
  }
}
