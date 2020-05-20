import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../products/shared/util-product/product.service';
import {Observable} from 'rxjs';
import {Product} from '../../products/shared/util-product/product';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  newestProducts$: Observable<Product[]>;

  constructor(private ps: ProductService) { }

  ngOnInit(): void {
    this.newestProducts$ = this.ps.getNewestProducts(4);

  }

}
