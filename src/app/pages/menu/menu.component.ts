import { Component, inject, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { MenuItem } from '../../models/menu-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-menu',
  imports: [TitleCasePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  
  private route= inject(ActivatedRoute);
  private menuService= inject(MenuService);
  cartService=inject(CartService);

  currentCategory: string='';
  displayItems:MenuItem[]=[];

  ngOnInit() {
      this.route.paramMap.subscribe(params =>{
        this.currentCategory=params.get('categoryName')||'burgers';
        this.displayItems=this.menuService.getItemsByCategory(this.currentCategory);
      });
  }
}
