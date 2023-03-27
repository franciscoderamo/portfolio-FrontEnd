import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})

export class SkillService {
  URL = 'http://localhost:8080/skill/'; // 'https://portfolio-francisco-deramo.onrender.com/skill/';

  //URL = environment.URL + 'skill/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `see/${id}`);
  }

  public new(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', skill);
  }

  public edit(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
