import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  name:string;
  power = 2;
  factor = 1;
  constructor() { }
  
  ngOnInit(): void {
  }

}
