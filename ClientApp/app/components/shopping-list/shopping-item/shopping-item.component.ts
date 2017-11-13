import { AppService } from './../../../services/app.service';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ShoppingListItem } from './../../../models/shoppingListItem';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShoppingItemComponent implements OnInit {

  @Input() shoppingItem: ShoppingListItem;  
  constructor(private appService: AppService) { }

  ngOnInit() {
  }
  setEditState(item: any, state: boolean) {
    if (!item.isCompleted) {
      if (state) {
        item.isEditMode = state;
      } else {
        delete item.isEditMode;
      }
    }
  }
  toggleshoppingItem(shoppingItem: ShoppingListItem) {
    shoppingItem.isCompleted = !shoppingItem.isCompleted;
    this.appService.updateShoppingItem(shoppingItem)
        .subscribe(
            data => console.log('Updated!'),
            err => console.log(err)
        );
  }
  updateShoppingItem(shoppingItem: ShoppingListItem) {
    this.appService.updateShoppingItem(shoppingItem)
    .subscribe(
        data => console.log('Updated!'),
        err => console.log(err)
    );
  }
  deleteShoppingItem(id: number) {
    this.appService.deleteShoppingItem(id)
    .subscribe(
        data => {
          let items: ShoppingListItem[] =this.appService.shoppingItemsSubj.getValue();
          _.remove(items, item => item.id == id);
          this.appService.shoppingItemsSubj.next(items);
          console.log('Deleted!');

        },
        err => console.log(err)
    );
  }


}
