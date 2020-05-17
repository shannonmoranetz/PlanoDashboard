import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { extractData } from '../utils/extractData';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) { }

  postLogAttrs($endpoint, $body): Observable<any> {
    return this.http.post($endpoint, $body, httpOptions).pipe(
      map(extractData).bind(this));
  }

}
