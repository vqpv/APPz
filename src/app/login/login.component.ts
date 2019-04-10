import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'
import { HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( private router: Router, private http: HttpClient) { }

    login: string = "";
    password: string = "";

  ngOnInit() {
  }

  private options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };

  webApi = 'https://dev.ankf.ru/request/login';

  postLogin() {
    this.http.post(this.webApi, `login=${this.login}&password=${this.password}`, this.options)
      .subscribe(
      data  => { console.log("POST Request is successful ", data); },
      error  => { console.log("Error", error); } )
    }
}