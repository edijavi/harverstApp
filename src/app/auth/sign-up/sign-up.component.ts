import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService  } from '../auth.service';

declare var $:any;


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    debugger
  }

  register(form) {
    debugger
    console.log(form.value);
    this.authService.register(form.value).subscribe((res) => {
      debugger
      console.log("Registered!");
      this.router.navigateByUrl('/welcome');
      // TODO use angular boostrap version
      $('#signupModal').modal('hide');
    });
  }

}
