import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  inst="I am from Serices";
  NewItem() {
    return this.inst;
  }
}
