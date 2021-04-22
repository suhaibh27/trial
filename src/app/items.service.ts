/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
interface item{
  title: string,
  description: string,
  price: number
}
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: item[]=[];
  cart: item[]=[];
  constructor() {
     }
  addToItems(mtitle,dsc,pr){
    this.items.push({title: mtitle,description:dsc,price:pr});
  }
  getItem(i){
    return this.items[i];
  }
  addToCart(i){
    this.cart.push(this.items[i]);
    console.log(this.items[i].title);
    Storage.set({key:'cart',value:JSON.stringify(this.cart)});
  }
  removeFromCart(i){
    this.cart.splice(i,i+1);
    Storage.set({key:'cart',value:JSON.stringify(this.cart)});
  }
}
