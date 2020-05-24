import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService  } from '../auth.service';
import { User  } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  register(form) {
    console.log(form.value);
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

}
