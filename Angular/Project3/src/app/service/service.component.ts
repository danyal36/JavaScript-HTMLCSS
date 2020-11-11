import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  
  
  constructor(private childService:UserserviceService) { }
  data:string[]=this.childService.serviceList;
  ngOnInit(): void {
    // this.currentSercvice = this.childService.NewUser();
  }

}
