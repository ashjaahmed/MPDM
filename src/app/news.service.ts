import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operators/map';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private _url="/api/jhumru";
  constructor(private _http:HttpClient ) { }
  getNews():Observable<any>{
    return this._http.get<any>(this._url);
    
  }
}
