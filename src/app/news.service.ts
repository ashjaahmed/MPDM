import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operators/map';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _url="/api/jhumru";
  private _url2="/api/goti";

  constructor(private _http:HttpClient ) { }
  getNews():Observable<any>{
    return this._http.get<any>(this._url);
  }
  getExplore():Observable<any>{
    return this._http.get<any>(this._url2);
  }
  
}
