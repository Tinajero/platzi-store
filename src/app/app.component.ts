import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
//  templateUrl: './app.component.html',
// debido a que el hml es muy pequenio se colocara en el dato template el html
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
