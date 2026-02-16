import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item.model';
import { RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as AOS from 'aos';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private toastr=inject(ToastrService);
  showReceiptModal: boolean=false;
  cartService=inject(CartService);
  
  openReceipt() {
    if (this.cartService.getAllItems().length === 0) {
      this.toastr.error('Add some food to your cart first!', 'Cart Empty 🛒');
      return;
    }
    this.showReceiptModal = true;
    setTimeout(()=>{
      AOS.refresh();
    },50);
  }
  closeReceipt() {
    this.showReceiptModal = false;
  }
  confirmOrder(){
    this.cartService.clearCart();
    this.showReceiptModal = false;
    this.toastr.success('Your food is being prepared!', 'Order Confirmed! ✅');
  }
  
}
