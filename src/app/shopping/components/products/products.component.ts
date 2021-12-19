import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: any[] = [];
  subscribtion!: Subscription;
  subscribtionCart!: Subscription;
  category: any;
  filteredProducts: any[] = [];
  cart!: any;


  constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: ShoppingCartService) { }

  async ngOnInit(): Promise<void> {

    this.subscribtion = this.productService.getAll().snapshotChanges().pipe(switchMap(products => {
      this.products = products;
      return this.route.queryParamMap
    })).subscribe(params => {
      this.category = params.get('category');
      this.filteredProducts = (this.category) ?
        this.products.filter(p => (p.payload.val().category.toLowerCase()) === this.category) :
        this.products;
    })
    this.subscribtionCart = (await this.cartService.getCart()).subscribe(cart => this.cart = cart);
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
    this.subscribtionCart.unsubscribe()
  }

}
