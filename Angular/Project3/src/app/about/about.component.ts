import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  aboutWeb:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas, urna vitae commodo dapibus, dui lacus sollicitudin quam, blandit vestibulum lorem odio non nisi. Morbi dignissim finibus rutrum. Etiam gravida, tortor eget posuere malesuada, neque eros porta elit, a rhoncus sapien purus vel dolor. Praesent non ligula convallis, pretium felis sit amet, vestibulum magna. In egestas, turpis at fringilla tincidunt, purus felis tincidunt ligula, eget tempor lacus est ac ipsum. Morbi condimentum convallis facilisis. Vestibulum faucibus dictum rhoncus. Donec porttitor maximus porttitor. Etiam tincidunt ex felis, vitae placerat ligula porttitor at. In lectus sem, cursus eu leo in, convallis semper magna.";
  @Output() outputEvent = new EventEmitter <string>();
  constructor() { }
  addNewItem() {
    this.outputEvent.emit(this.aboutWeb);
  }
  ngOnInit(): void {
  }

}
