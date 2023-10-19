import { Component,OnInit } from '@angular/core';
import { NewsService } from '../news.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public allitem:any=[];
  public newArray:any=[];
  public arr:any=[1,2,3,4,5,6,7,8,9,10,11,12];
  constructor(private _newsService:NewsService ){
    
  }
  
  ngOnInit(){
    this._newsService.getNews()
    .subscribe((result: any)=>{
      this.allitem=result;
    this.copytonewArray();
    })
  }
  copytonewArray(){
    this.newArray=this.allitem.slice(1,5);
    console.log(this.newArray);
  }
}
