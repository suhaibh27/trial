/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
import { ItemsService } from './../items.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public cart=[];
  constructor(public itemsSrv: ItemsService) {
    Storage.get({key:"cart"}).then( (res)=>{
           this.cart = JSON.parse(res.value);
        });
    console.log(itemsSrv.cart);
  }
  ngOnInit() {
  }
  delete(i){
    this.itemsSrv.removeFromCart(i);
    Storage.get({key:"cart"}).then( (res)=>{
           this.cart = JSON.parse(res.value);
        });  }
  total(){
    let tot=0;
    for(let item of this.cart){
      tot+=Number(item.price);
    }
    alert("Total Price= BD"+tot)
  }

}
