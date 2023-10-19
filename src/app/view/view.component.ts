import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  public allitem:any=[];
  public arr:any=[1,2,3,4,5,6,7,8,9,10];
  public id: Number | undefined;
  constructor(private _newsService:NewsService,private _activatedRoute:ActivatedRoute){

  }

  ngOnInit(){
    this._newsService.getExplore()
    .subscribe((result: any)=>this.allitem=result);
    for(var i in this.allitem){
      console.log(this.allitem[i]);
    }
    this._activatedRoute.params.subscribe(params=> {
      let Id=params['Id'];
      this.id=Id;
      console.log(this.id);
      console.log(Id);
    })
  }
}
