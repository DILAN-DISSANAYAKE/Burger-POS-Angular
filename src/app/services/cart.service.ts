import { inject, Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { MenuItem } from '../models/menu-item.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private toastr=inject(ToastrService);
  cartItems: CartItem[]=[];

  constructor() { 
    const savedItems=localStorage.getItem('cart');

    if(savedItems){
      this.cartItems=JSON.parse(savedItems);
    }
  }
  saveCart(){
    localStorage.setItem('cart',JSON.stringify(this.cartItems));
  }
  addToCart(newItem: MenuItem){
    const exsistItem=this.cartItems.find(item => item.item.id===newItem.id);
    if(exsistItem){
      exsistItem.qty+=1;
      exsistItem.subTotal+=newItem.price;
    }else{
      const nextId=this.cartItems.length>0?Math.max(...this.cartItems.map(item=> item.id))+1:1;
      const newCartItem={
        id: nextId,
        item: newItem,
        qty: 1,
        subTotal: newItem.price
      };
      this.cartItems.push(newCartItem);
    }
    this.saveCart();
    this.toastr.success('Added to cart!', 'Success');
  }
  count():number{
    let totalCount=0;
    for(let item of this.cartItems){
      totalCount+=item.qty;
    }

    return totalCount;
  }
  clearCart(){
    this.cartItems=[];
    this.saveCart();
    localStorage.removeItem('cart');
    this.toastr.error('Your cart has been cleared.', 'Cart Cleared');
  }
  qtyUp(cartItem: CartItem){
    const findItem=this.cartItems.find(item=> item.id===cartItem.id);
    if(findItem){
      findItem.qty+=1;
      findItem.subTotal+=findItem.item.price;
    }
    this.saveCart();
  }
  qtyDown(cartItem: CartItem){
    const findItem=this.cartItems.find(item=> item.id===cartItem.id);
    if(findItem && findItem.qty>1){
      findItem.qty-=1;
      findItem.subTotal-=findItem.item.price;
    }
    this.saveCart();
  }
  removeItem(cartItem: CartItem){
    this.cartItems=this.cartItems.filter(item=> item.id!==cartItem.id);
    this.saveCart();
  }
  getAllItems():CartItem[]{
    return this.cartItems;
  }
  getTotal():number{
    let total=0;
    for(let countTotal of this.cartItems){
      total+=countTotal.subTotal;
    }
    return total;
  }
}
