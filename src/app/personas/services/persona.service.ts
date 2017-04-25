import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class PersonaService {

  private static BASE_URL: string = 'http://localhost:8080/services';

  constructor(public http: Http) {
  }

  query(URL: string, params?: Array<string>): Observable<any[]> {
    let queryURL: string = `${PersonaService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join('&')}`;
    }

    return this.http.request(queryURL).map((res: any) => res.json());
  }

  queryLink(URL: string): Observable<any[]> {
    return this.http.request(URL).map((res: any) => res.json());
  }

  getPersonas(page: number, texto?: string): Observable<any[]> {
    let parametros: Array<string> = [`page=${page}`];
    if (texto) {
     parametros.push(`filtro=${texto}`);
    } 
    
    return this.query('/personas', parametros);
  }

  getPersona(id: number): Observable<any[]> {
    return this.query(`/personas/${id}`);
  }
}

export var PERSONAS_PROVIDERS: Array<any> = [
  {provide: PersonaService, useClass: PersonaService}
];
