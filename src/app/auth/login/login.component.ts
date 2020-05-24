import { Component, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService  } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }


  login(form){
    console.log(form.value);
    this.authService.singIn(form.value).subscribe((res)=>{
      console.log("Logged in!");
      this.router.navigateByUrl('welcome');
    });
  }


}
