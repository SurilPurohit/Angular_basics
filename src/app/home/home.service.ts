import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _url: string = "./../../assets/data/data.json";

  constructor(private http: HttpClient) { }
  
  show(){
  }

  hhhtttp() : Observable<HomeService[]>{
    return this.http.get<HomeService[]>(this._url);
  }
}