import { Component,afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Burger-POS-Angular';
  constructor() {

    afterNextRender(() => {
      AOS.init({
        duration: 800, 
        once: true,   
        offset: 100    
      });
    });
  }
}
