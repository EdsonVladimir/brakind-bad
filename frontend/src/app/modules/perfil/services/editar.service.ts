
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsuarioEditService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) { }

  obtenerEditUsuario(): Observable<any> {
    let token:any = localStorage.getItem('token');
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    ).set('token',token);
    console.log(this.URL)
    return this.http.get(`${this.URL}/usuario`, {headers: headers}).pipe(map( data => {
      return data;
    }))
  }

}
