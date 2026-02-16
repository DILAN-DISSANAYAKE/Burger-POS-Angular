import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuAllItems: { [key: string]: MenuItem[] } = {
    burgers: [
      { id: 1, name: 'Bacon Cheeseburger', price: 11.99, image: '/images/burgers/burger1.jpg' },
      { id: 2, name: 'Crispy Chicken', price: 9.49, image: '/images/burgers/burger2.jpg' },
      { id: 3, name: 'Classic Beef', price: 8.99, image: '/images/burgers/burger3.jpg' },
      { id: 4, name: 'Loaded Steak Burger', price: 13.99, image: '/images/burgers/burger4.jpg' },
      { id: 5, name: 'Fiery Volcano', price: 12.49, image: '/images/burgers/burger5.jpg' },
      { id: 6, name: 'Homestyle Beef', price: 9.99, image: '/images/burgers/burger6.jpg' },
      { id: 7, name: 'Double Thick Burger', price: 14.99, image: '/images/burgers/burger7.jpg' },
      { id: 8, name: 'Crispy Fish Fillet', price: 10.49, image: '/images/burgers/burger8.jpg' },
      { id: 9, name: 'Mushroom Swiss', price: 11.49, image: '/images/burgers/burger9.jpg' },
      { id: 10, name: 'Smokey BBQ Bacon', price: 12.99, image: '/images/burgers/burger10.jpg' },
      { id: 11, name: 'The Messy Stack', price: 15.99, image: '/images/burgers/burger11.jpg' },
      { id: 12, name: 'Veggie Supreme', price: 9.99, image: '/images/burgers/burger12.jpg' }
    ],
    drinks: [
      { id: 13, name: 'Watermelon Splash', price: 3.49, image: '/images/drinks/d1.png' },
      { id: 14, name: 'Grape Magic', price: 3.49, image: '/images/drinks/d2.png' },
      { id: 15, name: 'Sour Apple Limeade', price: 3.99, image: '/images/drinks/d3.png' },
      { id: 16, name: 'Blue Raspberry Fizz', price: 3.99, image: '/images/drinks/d4.png' },
      { id: 17, name: 'Lemon Cucumber Cooler', price: 3.49, image: '/images/drinks/d5.png' },
      { id: 18, name: 'Berry Sunset', price: 4.49, image: '/images/drinks/d6.png' },
      { id: 19, name: 'Strawberry Lemonade', price: 3.99, image: '/images/drinks/d7.png' },
      { id: 20, name: 'Tropical Ocean Surf', price: 4.49, image: '/images/drinks/d8.png' },
      { id: 21, name: 'Orange Crush', price: 3.49, image: '/images/drinks/d9.png' },
      { id: 22, name: 'Classic Lemonade', price: 2.99, image: '/images/drinks/d10.jpeg' } // Note the .jpeg!
    ],
    milkshakes: [
      { id: 23, name: 'Caramel Vanilla', price: 5.99, image: '/images/milkshakes/ms1.png' },
      { id: 24, name: 'Mint Choco Chip', price: 6.49, image: '/images/milkshakes/ms2.png' },
      { id: 25, name: 'Double Fudge', price: 6.49, image: '/images/milkshakes/ms3.png' },
      { id: 26, name: 'Classic Strawberry', price: 5.99, image: '/images/milkshakes/ms4.png' },
      { id: 27, name: 'Very Berry Blast', price: 6.99, image: '/images/milkshakes/ms5.png' }
    ],
    subs: [
      { id: 28, name: 'Turkey Club', price: 7.49, image: '/images/subs/turkey.png' },
      { id: 29, name: 'Italian Meatball', price: 8.99, image: '/images/subs/meatball.png' },
      { id: 30, name: 'Roasted Veggie', price: 6.99, image: '/images/subs/veggie.png' },
      { id: 31, name: 'Philly Cheesesteak', price: 9.49, image: '/images/subs/philly.png' }
    ]
};
  constructor() { }

  getItemsByCategory(category: string):MenuItem[]{
    return this.menuAllItems[category]||[];
  }

  getItemsForHome():MenuItem[]{
    const burgersList=this.getItemsByCategory('burgers');
    const drinksList=this.getItemsByCategory('drinks');
    const subsList=this.getItemsByCategory('subs');
    const milkshakesList=this.getItemsByCategory('milkshakes');
    let homeMenuList: MenuItem[]=[];
    for (let index = 0; index <4 ; index++) {
      homeMenuList.push(burgersList[index]);
      homeMenuList.push(drinksList[index]);
      homeMenuList.push(subsList[index]);
      homeMenuList.push(milkshakesList[index]);
      
    }
    return homeMenuList;
  }
  
}


