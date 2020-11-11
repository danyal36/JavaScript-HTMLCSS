import { Component } from '@angular/core';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  power=2;
  factor=1;

  currentItem="I am from parent";
  title = 'Project2';
  currentSercvice:string;
  data:string;
  childItem:string[] = ["1","2","3","4"];
  constructor(private childService:ProjectService){
    this.data=this.childService.inst;
  }
  addItem(value: string) {
    this.childItem.push(value);
  }
  ngOnInit() {
    this.currentSercvice = this.childService.NewItem();
  }
}
