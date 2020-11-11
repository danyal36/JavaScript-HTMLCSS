import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() item: string;
  @Output() outputEvent = new EventEmitter <string>();

  constructor() { }
  addNewItem(value:string) {
    this.outputEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
