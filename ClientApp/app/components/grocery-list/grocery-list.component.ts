import { AppService } from './../../services/app.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GroceryListComponent implements OnInit {

  items$ = this.service.items$;
  

  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getItems();
  }

}
