import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'platzi-store';

  items = ['Daniel', 'Juan', 'Ernesto', 'Luis'];

  objeto = {};

  power = 10;

  textoReversar: string;

  addItem() {
    this.items.push(this.title);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }


}
