import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  //url = 'https://localhost:8080/person/';
  url = 'https://portfolio-francisco-deramo.onrender.com';

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<Person[]> {
    return this.http.get<Person[]>(this.url + 'all');
  }

  public seePerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.url + `see/${id}`);
  }

  public addPerson(per: Person): Observable<any> {
    return this.http.post<any>(this.url + 'new', per);
  }

  public editPerson(per: Person): Observable<any> {
    return this.http.put<any>(this.url + 'edit', per);
  }

  public deletePerson(id: number): Observable<any> {
    return this.http.delete<any>(this.url + `delete/${id}`);
  }
}
