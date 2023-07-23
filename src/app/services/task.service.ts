import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  URL = 'https://portfolio-francisco-deramo.onrender.com/task/';
  // URL = 'http://localhost:8080/task/';
  // URL = environment.URL + 'task/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Task>{
    return this.httpClient.get<Task>(this.URL + `see/${id}`);
  }

  public new(task: Task): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', task);
  }

  public edit(id: number, task: Task): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, task);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
