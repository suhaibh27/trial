/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../items.service';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.page.html',
  styleUrls: ['./items-list.page.scss'],
})
export class ItemsListPage implements OnInit {
  public items=[];
  constructor(public itemSrv: ItemsService) {
    this.items=itemSrv.items;
  }

  ngOnInit() {
  }
  order(i)
  {
    this.itemSrv.addToCart(i);
  }

}
