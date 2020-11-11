import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  private inst ="Information of new User from Services";
  serviceList=["lai","ali"]
  userData=[];
  NewUser() {
    return this.inst;
  }
  Users() {
    return this.userData;
  }
  setUser(value:string){
   this.userData.push(value)
  }
}
