import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = 'http://localhost:8080/person/'; // 'https://portfolio-francisco-deramo.onrender.com/person/';

  //URL = environment.URL + 'person/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.URL + 'all');
  }

  // public see(id: number): Observable<Person>{
  //   return this.httpClient.get<Person>(this.URL + `see/${id}`);
  // }

  // public new(person: Person): Observable<any>{
  //   return this.httpClient.post<any>(this.URL + 'new', person);
  // }

  public edit(id: number, person: Person): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, person);
  }

  // public delete(id: number): Observable<any>{
  //   return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  // }
}
