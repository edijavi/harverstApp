import { Component, OnInit, Inject } from '@angular/core';
import {ProductService} from '../../products/shared/util-product/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../products/shared/util-product/product';
import { AuthService } from '../../auth/shared/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  newestProducts$: Observable<Product[]>;

  titleVisible$: Observable<boolean>;

  constructor(private ps: ProductService, private auth: AuthService) {
   }

  ngOnInit(): void {
    this.newestProducts$ = this.ps.getNewestProducts(4);
    this.titleVisible$ = this.auth.authSubject
  }


}
