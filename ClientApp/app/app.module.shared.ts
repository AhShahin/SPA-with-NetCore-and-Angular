import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryItemComponent } from './components/grocery-list/grocery-item/grocery-item.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {ShoppingItemComponent} from './components/shopping-list/shopping-item/shopping-item.component';
import { AppService } from './services/app.service';
import { ModalModule, AccordionModule } from 'ngx-bootstrap';



@NgModule({
    declarations: [
        AppComponent,
        GroceryListComponent,
        GroceryItemComponent, 
        ShoppingListComponent, 
        ShoppingItemComponent,      
        NavMenuComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ModalModule.forRoot(),
        AccordionModule.forRoot(),
        RouterModule.forRoot([
            { path: '', redirectTo: 'items', pathMatch: 'full' },
            { path: 'items', component: GroceryListComponent},
            { path: 'shopping-list', component: ShoppingListComponent},            
            { path: '**', redirectTo: 'items' }
        ])
    ],
    providers: [
        AppService
    ]
})
export class AppModuleShared {
}
