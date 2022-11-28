
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  private readonly URL = environment.apiBrakind;
  constructor(private http: HttpClient) { }

  obtenerPersonajes(): Observable<any> {
    const headers = new HttpHeaders().set(
      'Content-Type', 'application/json'
    );
    console.log(this.URL)
    return this.http.get(`${this.URL}`).pipe(map( data => {
      return data;
    }))
  }

}
