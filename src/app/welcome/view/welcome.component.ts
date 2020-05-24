import { Component, OnInit, Inject } from '@angular/core';
import {ProductService} from '../../products/shared/util-product/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../products/shared/util-product/product';
import { UserService } from 'src/app/public/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  providers: [UserService],
})
export class WelcomeComponent implements OnInit {
  public identity;
  newestProducts$: Observable<Product[]>;

  constructor(private ps: ProductService, private _userService: UserService) {
   }

  ngOnInit(): void {
    this.newestProducts$ = this.ps.getNewestProducts(4);
  }

}
