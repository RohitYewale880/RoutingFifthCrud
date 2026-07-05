import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ilogin, Isignin } from '../modals/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authBaseUrl : string = environment.authBaseUrl
  constructor(
    private _http : HttpClient
  ) { }

  Login(userDetails :Ilogin){
    let loginUrl = `${this.authBaseUrl}/api/auth/login`
    return this._http.post<any>(loginUrl, userDetails)
  }

  SignIn(userDetails : Isignin){
    let signinUrl =  `${this.authBaseUrl}/api/auth/register`
    return this._http.post<any>(signinUrl, userDetails)
  }

  saveToken(token : string){
    localStorage.setItem('token', token)
  }

  saveUserrole(userRole : string){
    localStorage.setItem('userRole', userRole)
  }

  getToken(){
    localStorage.getItem('token')
  }

  getuserRole(){
    localStorage.getItem('userRole')
  }

  logoutService(){
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
  }
}
