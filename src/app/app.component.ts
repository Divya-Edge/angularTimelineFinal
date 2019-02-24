import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTimeline';
  data:any =  [{"Year":2014,"Date":4,"Month":"Jan","Activity":"Created the Patient profile template. "},{"Year":2014,"Date":12,"Month":"Mar","Activity":"Worked on Carelink users"},{"Year":2014,"Date":5,"Month":"Jun","Activity":"Worked on Export excel "},{"Year":2015,"Date":21,"Month":"Apr","Activity":"Worked on intergration testing. "},{"Year":2015,"Date":8,"Month":"Sep","Activity":"Created home page widgets "},{"Year":2015,"Date":15,"Month":"Dec","Activity":"Worked on VT issues "}];
}
