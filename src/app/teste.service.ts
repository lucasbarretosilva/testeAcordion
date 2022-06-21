import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { teste } from './Models/teste.model';


@Injectable({
  providedIn: 'root'
})
export class TesteService {

  constructor(private http : HttpClient) { }

   url = 'https://localhost:7208/api/Conteudos'


   PegarCursos():Observable<teste[]> {
    return this.http.get<any>(this.url);
  }



}
