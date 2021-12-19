import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }
  create(product: any) {
    return this.db.list('products').push(product);
  }
  getAll():AngularFireList<any[]> {
    return this.db.list('products');
  }
 
  getById(productId: any) {
    return this.db.object('products/'+ productId);
  }
  update(productId: any, product: any ) {
    return this.db.object('products/'+ productId).update(product);
  }
  delete(productId:any) {
    return this.db.object('/products/'+ productId).remove();
  }
}
