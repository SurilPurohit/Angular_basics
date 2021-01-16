import { Component } from '@angular/core';
declare const myfunc : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],  
})


export class AppComponent{
  title = 'First Try';

  onClick(){
    myfunc();
  }

  show(){
  }

  hhhtttp(){
  }
}
