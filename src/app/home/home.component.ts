import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public homie = [];

  constructor(private _homeServices : HomeService) { }

  ngOnInit() {
    this._homeServices.show();
    // alert("Services Done!");

    this._homeServices.hhhtttp()
      .subscribe(data => 
        {
          this.homie = data;
          console.log(this.homie);
    });
      
  }
  

}
