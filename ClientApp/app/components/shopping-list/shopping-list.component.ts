import { Observable } from 'rxjs/Observable';
import { AppService } from './../../services/app.service';
import { ShoppingListItem } from './../../models/shoppingListItem';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingListComponent implements OnInit {

  ShoppingItems$: Observable<ShoppingListItem[]> = this.service.shoppingItems$;
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getShoppingList(1);;
  }

}
