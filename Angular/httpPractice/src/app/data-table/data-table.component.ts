import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  user;
  header:string[]=[];
  constructor(private http:HttpService) {
    
  }
  
  ngOnInit(): void {
    this.http.getUser().subscribe((data)=>{
      this.user=data;
      for(var i in this.user[0]){
        this.header.push(i);  
      }  
    });
  }

}
