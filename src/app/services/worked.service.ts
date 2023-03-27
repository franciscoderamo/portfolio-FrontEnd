import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Worked } from '../model/worked';

@Injectable({
  providedIn: 'root'
})
export class WorkedService {
  URL = 'http://localhost:8080/worked/'; // 'https://portfolio-francisco-deramo.onrender.com/worked';

  //URL = environment.URL + 'worked/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Worked[]>{
    return this.httpClient.get<Worked[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Worked>{
    return this.httpClient.get<Worked>(this.URL + `see/${id}`);
  }

  public new(worked: Worked): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', worked);
  }

  public edit(id: number, worked: Worked): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, worked);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
