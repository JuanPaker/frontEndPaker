import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class PorfolioService {
 url:string="localhost:8080/personas/traer/perfil";
  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>
  {
    return this.http.get<any>(this.url+"persona");
    //return this.http.get<any>('');
  }

}


