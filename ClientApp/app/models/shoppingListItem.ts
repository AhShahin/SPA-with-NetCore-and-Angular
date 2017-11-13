import { Item } from './item';
export interface ShoppingListItem {
    isCompleted: boolean;
    unit: number;
    userId: number;
    itemId: number;
    notes?: string; 
    item?: Item;   
    id?: number;
}