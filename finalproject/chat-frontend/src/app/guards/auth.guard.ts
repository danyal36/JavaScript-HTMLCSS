import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}
  loggedIn=false;
  canActivate():boolean{
    if(this.loggedIn){
      return true
    }
    this.router.navigate(['login']);
    return false
  }
  // canActivate(): boolean {
  //   if (!this.auth.isAuthenticated()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }
  setLoginStatus(){
    this.loggedIn=false;
    this.router.navigate(['login']);
  }
}
