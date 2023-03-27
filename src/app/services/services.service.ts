import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Services } from '../model/services';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  URL = 'http://localhost:8080/services/'; // 'https://portfolio-francisco-deramo.onrender.com/services';

  //URL = environment.URL + 'services/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Services[]>{
    return this.httpClient.get<Services[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Services>{
    return this.httpClient.get<Services>(this.URL + `see/${id}`);
  }

  public new(services: Services): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', services);
  }

  public edit(id: number, services: Services): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, services);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
