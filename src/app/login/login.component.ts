import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService,
    public router: Router) {


   }

  ngOnInit(): void {
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out')
  }


  login() {
    this.message = "trying to log in ..."

    this.authService.login().subscribe(() => {

      this.setMessage();

      if(this.authService.isLoggedIn) {
        this.router.navigate(['/admin'])
      }


      
    })
  }
  
  logout() {
    this.message = "trying to log out  ..."


    this.authService.logout();
    this.setMessage();
  }
}
