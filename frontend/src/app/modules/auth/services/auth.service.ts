
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) { }

  sendCredentials(par_email: string, par_contrasenia: string): Observable<any> {
    const body = {
      par_email,
      par_contrasenia
    }
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    );
    console.log(this.URL)
    return this.http.post(`${this.URL}/login`, body, {headers: headers}).pipe(map( data => {
      return data;
    }))
  }
  registrarUsuario(body:{}): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    );
    console.log(this.URL)
    return this.http.post(`${this.URL}/usuario`, body, {headers: headers}).pipe(map( data => {
      return data;
    }))
  }

}
