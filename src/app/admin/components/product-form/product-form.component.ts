import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$!: any;
  product: any = {};
  id: any;

  constructor(private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = this.categoryService.getCategories().valueChanges();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.product = this.productService.getById(this.id).snapshotChanges();
      this.productService.getById(this.id).valueChanges().pipe(take(1)).subscribe((prod: any) => this.product = prod);
    }
  }

  save(product: any) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }

  delete() {
    if( !confirm("Are you sure you want to delete this product? ")) return; 

    this.productService.delete(this.id);
    this.router.navigate(['/admin/products']);
    
  }

}
