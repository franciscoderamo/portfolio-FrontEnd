import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Experience } from '../model/experience.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  URL = 'https://portfolio-francisco-deramo.onrender.com/experience/';
  //URL = 'http://localhost:8080/experience/';
  //URL = environment.URL + 'experience/';

  constructor(private httpClient: HttpClient) {

   }
  public all(): Observable<Experience[]>{
    return this.httpClient.get<Experience[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Experience>{
    return this.httpClient.get<Experience>(this.URL + `see/${id}`);
  }

  public new(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', experience);
  }

  public edit(id: number, experience: Experience): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, experience);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
