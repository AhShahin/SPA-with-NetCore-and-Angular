import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ShoppingListItem } from './../models/shoppingListItem';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Item } from './../models/item';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Injectable()
export class AppService {
  itemsSubj: Subject<Item> = new Subject<Item>();
  items$ = this.itemsSubj.asObservable();
  shoppingItemsSubj: BehaviorSubject<ShoppingListItem[]> = new BehaviorSubject<any>(null); 
  shoppingItems$ = this.shoppingItemsSubj.asObservable();
  constructor(private http: Http) { }

  getItems(): Subscription{
    return this.http.get('/api/Items')
    .map(res => res.json()).
      subscribe(items => this.itemsSubj.next(items),
        err => console.log(err));
  }
  addShoppingListItem(item: ShoppingListItem): Observable<ShoppingListItem> {
    return this.http.post('/api/user/ShoppingList', item)
    .map(res => res.json());
  }
  getShoppingList(userId: number) {
    return this.http.get('/api/user/' + userId + '/ShoppingList')
    .map(res => res.json()).
    subscribe(items => this.shoppingItemsSubj.next(items),
    err => console.log(err));;
  }
  updateShoppingItem(shoppingItem: ShoppingListItem): Observable<ShoppingListItem> {
    return this.http.put('/api/user/ShoppingList/' + shoppingItem.id, shoppingItem)
    .map(res => res.json());
  }
  deleteShoppingItem(id: number){
    return this.http.delete('/api/user/ShoppingList/' + id)
    .map(res => res.json());
  }

}
