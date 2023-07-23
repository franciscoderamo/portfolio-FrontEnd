import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment';
import { Portfolio } from '../model/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  URL = 'https://portfolio-francisco-deramo.onrender.com/portfolio/'; // 'http://localhost:8080/portfolio/';

  //URL = environment.URL + 'portfolio/';

  constructor(private httpClient: HttpClient) { }

  public all(): Observable<Portfolio[]>{
    return this.httpClient.get<Portfolio[]>(this.URL + 'all');
  }

  public see(id: number): Observable<Portfolio>{
    return this.httpClient.get<Portfolio>(this.URL + `see/${id}`);
  }

  public new(portfolio: Portfolio): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'new', portfolio);
  }

  public edit(id: number, portfolio: Portfolio): Observable<any>{
    return this.httpClient.put<any>(this.URL + `edit/${id}`, portfolio);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
