import { Injectable } from '@angular/core';
import { PERSONS } from './mock-persons';
import { Person } from './person';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { Product } from '../common/product';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/';


  getPersonList(): Observable<Person[]> {
    return this.http.get<any>(this.baseUrl).pipe(
      map(response => response)
    );
  }

  getSelectedPersonList(personId:string,dateOfBirth:string): Observable<Person[]>{
    return this.http.get<any>(`${this.baseUrl}${personId}/${dateOfBirth}`).pipe(
      map(response => response)
    );
  }
}
