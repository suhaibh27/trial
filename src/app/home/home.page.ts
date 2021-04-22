import { Router } from '@angular/router';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}
  goCart(){
    this.router.navigateByUrl('/cart');
  }
  goItemsList(){
    this.router.navigateByUrl('/items-list');
  }
  goAddItem()
  {
    this.router.navigateByUrl('/add-new-item');
  }
}
