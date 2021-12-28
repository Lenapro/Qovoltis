import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://127.0.0.1:8000/api/user/login"

  constructor(private http: HttpClient) { }

  data = {
    "login": "",
    "password": ""
  }

 connexion_user(email:any, password:any){
   this.data.login = email;
   this.data.password = password;
   const header = {'Authorisation': 'Basic'};
   return this.http.post(this.url, {'headers': header } )
 }

}
