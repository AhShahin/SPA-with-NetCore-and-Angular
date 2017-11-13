import { AppService } from './../../../services/app.service';
import { ShoppingListItem } from './../../../models/shoppingListItem';
import { Item } from './../../../models/item';
import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-grocery-item',
  templateUrl: './grocery-item.component.html',
  styleUrls: ['./grocery-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GroceryItemComponent implements OnInit {

  @Input() item: Item;  
  @ViewChild('childModal') childModal: ModalDirective;
  isShowModal: boolean;  
  shoppingListItem: ShoppingListItem;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.shoppingListItem = {
      isCompleted: false,
      userId: 1,
      itemId: 0,
      notes: '',
      unit: 1
    }
  }

  addItem(item: Item) {
      console.log(item);
  }
  showChildModal(): void {
    this.childModal.show();
    //this.isShowModal = true;
  }
 
  hideChildModal(): void {
    this.childModal.hide();
    //this.isShowModal = false;   
  }

  save(itemId: number) {
    this.shoppingListItem.itemId = itemId;
    console.log(this.shoppingListItem);
    this.appService.addShoppingListItem(this.shoppingListItem).subscribe(
      data => { console.log('Created!');},
      err => console.error(err)
    );;
    this.hideChildModal();
    this.ngOnInit();
  }

}
