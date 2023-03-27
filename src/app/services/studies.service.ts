import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Studies } from '../model/studies';

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  URL = 'http://localhost:8080/studies/'; // 'https://portfolio-francisco-deramo.onrender.com/studies';

  //URL = environment.URL + 'studies/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Studies[]>{
    return this.httpClient.get<Studies[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Studies>{
    return this.httpClient.get<Studies>(this.URL + `see/${id}`);
  }

  public new(studies: Studies): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', studies);
  }

  public edit(id: number, studies: Studies): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, studies);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
