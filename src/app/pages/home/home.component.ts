import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import * as AOS from 'aos';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  private menuService=inject(MenuService);
  cartService=inject(CartService);
  displayedItems: MenuItem[]=[];
  ngOnInit() {
    this.displayedItems=this.menuService.getItemsForHome();
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }
}
