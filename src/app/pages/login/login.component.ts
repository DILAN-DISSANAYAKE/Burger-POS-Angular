import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  private router = inject(Router);

  username = '';
  password = '';
  
  loginError = false;

  ngOnInit() {
    setTimeout(() => AOS.refresh(), 100); 
  }

  onLogin() {
    const userEntered = this.username.toLowerCase().trim();

    if (
      (userEntered === 'lakindu' || 
       userEntered === 'dion' || 
       userEntered === 'shan' || 
       userEntered === 'dd') 
       && this.password === '1234'
    ) {
      this.loginError = false;
      this.router.navigate(['/home']);
    } else {
      this.loginError = true;
    }
  }
}

