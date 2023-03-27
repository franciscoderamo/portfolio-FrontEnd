import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { SkillGroup } from '../model/skill-group';

@Injectable({
  providedIn: 'root'
})
export class SkillGroupService {
  URL = 'http://localhost:8080/skillgroup/'; // 'https://portfolio-francisco-deramo.onrender.com/skillgroup/';

  //URL = environment.URL + 'skillgroup/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<SkillGroup[]>{
    return this.httpClient.get<SkillGroup[]>(this.URL + 'all');
  }

  public see(id: number): Observable<SkillGroup>{
    return this.httpClient.get<SkillGroup>(this.URL + `see/${id}`);
  }

  public new(skillgroup: SkillGroup): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', skillgroup);
  }

  public edit(id: number, skillgroup: SkillGroup): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, skillgroup);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
