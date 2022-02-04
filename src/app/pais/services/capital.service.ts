import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/pais.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CapitalService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarCapital(termino: string): Observable<Country[]>{

    let url = `${this.apiUrl}/capital/${termino}`;
    //console.log('URL', url)
    return this.http.get<Country[]>(url);
  }
}


