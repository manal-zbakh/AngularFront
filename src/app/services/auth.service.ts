import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  auth(form:NgForm){
   return  this.http.post("http://localhost:9191/connexion/auth",form);
  }

  isloged(){
   return localStorage.getItem('token')==null
  }
  logout(){
    localStorage.removeItem('token') ;
  }
}
