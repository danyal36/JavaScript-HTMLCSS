import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string;
  about:string;
  data:string;
  constructor() { }
  addNewUSer(value:string){
    this.name =value;
  }
  addItem(value: string) {
    this.about=value;
  }
  ngOnInit(): void {
    
  }

}
