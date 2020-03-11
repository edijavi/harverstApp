import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from './product';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fs: AngularFirestore) { }

  getNewestProducts(amount: number): Observable<Product[]> {
    return this.fs
      .collection<Product>('newest-products', ref => ref.limit(amount))
      .valueChanges();

  }
}
