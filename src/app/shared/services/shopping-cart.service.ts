import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { take } from 'rxjs/internal/operators/take';
import { IShoppingCart } from '../models/IShoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  private create() {
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    })
  }

  async getCart(): Promise<Observable<IShoppingCart>> {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId).valueChanges().pipe(map(cart => new IShoppingCart((cart as any).items)))
  }
  getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  async clearCart() {
    let cartId = await this.getOrCreateCartId();
    return this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }

  private async getOrCreateCartId() {
    let cartId = localStorage.getItem('cartId');
    if (cartId) return cartId;
    else {
      let result = await this.create();
      localStorage.setItem('cartId', result.key!);
      return result.key;
    }
  }

  addToCart(product: any) {
    this.updateToCart(product, 1);
  }
  removeFromCart(product: any) {
    this.updateToCart(product, -1);
  }

  async updateToCart(product: any, quantityState: any) {
    let cartId = await this.getOrCreateCartId();
    let item$ = this.getItem(cartId!, product.key);
    item$.snapshotChanges().pipe(take(1)).subscribe((item: any) => {


      if (item.payload.exists()) {
        if ((item.payload.val().quantity + quantityState) === 0) { item$.remove() }
        else {
          item$.update({
            quantity: item.payload.val().quantity + quantityState
          });
        }
      }
      else {
        item$.update({
          product: {
            title: product.payload.val().title,
            price: product.payload.val().price,
            category: product.payload.val().category,
            imgUrl: product.payload.val().imgUrl
          }, quantity: 1
        }
        )
      }


    });
  }




}
