import { Component, OnInit, Input } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() names: string;
  constructor(private childService:UserserviceService) { }
  userName=[];
  addToList(name:string){
    this.childService.setUser(name);
  }
  ngOnInit(): void {
    this.userName=this.childService.Users();
  }
  ngOnChanges() {
    this.addToList(this.names);
  }
}
