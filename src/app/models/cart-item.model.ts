import { MenuItem } from "./menu-item.model";

export interface CartItem {
    id: number;
    item: MenuItem;
    qty: number;
    subTotal: number;
}
