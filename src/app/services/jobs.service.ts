import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Jobs } from '../model/jobs.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  URL = 'https://portfolio-francisco-deramo.onrender.com/jobs/'; // 'http://localhost:8080/jobs/';

  //URL = environment.URL + 'jobs/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Jobs[]>{
    return this.httpClient.get<Jobs[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Jobs>{
    return this.httpClient.get<Jobs>(this.URL + `see/${id}`);
  }

  public new(jobs: Jobs): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', jobs);
  }

  public edit(id: number, jobs: Jobs): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, jobs);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
