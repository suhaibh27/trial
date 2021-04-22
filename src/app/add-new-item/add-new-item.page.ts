/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/quotes */
import { ItemsService } from './../items.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.page.html',
  styleUrls: ['./add-new-item.page.scss'],
})
export class AddNewItemPage implements OnInit {
  public title="";
  public description="";
  public price;
  constructor(public itemSrv: ItemsService) { }
  addItem(){
    if(this.title==""&&this.description==""&& this.price==null){
      alert("please Fill all the information");
    }
    else{
      this.itemSrv.addToItems(this.title,this.description,this.price);
      this.title="";
      this.description="";
      this.price="";
    }
  }
  ngOnInit() {
  }

}
