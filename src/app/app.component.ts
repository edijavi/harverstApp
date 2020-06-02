import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headerVisible$: Observable<boolean>;

  title = 'harvestApp';
  constructor(private auth: AuthService){
  }
  ngOnInit(): void {
    this.headerVisible$ = this.auth.authSubject;
  }

}
