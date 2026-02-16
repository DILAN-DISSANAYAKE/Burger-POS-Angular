import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Burger-POS-Angular';
  ngOnInit() {
    AOS.init({
      once: true,
      offset: 50,
      duration: 500
    });
  }
  
}
