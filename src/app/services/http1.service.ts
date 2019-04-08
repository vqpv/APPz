import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class Http1Service {
  private apiUrl = 'fds';

  constructor(private http: HttpClient) { }
}
