import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnDestroy {

  categories: any[] = [];
  subscribtionCategory!: Subscription;
  @Input('category') category: any;

  constructor(private categoryService: CategoryService) { 
    this.subscribtionCategory = this.categoryService.getCategories().snapshotChanges().pipe(map(prods =>
    this.categories = prods)).subscribe();
  }

  ngOnDestroy() {
    this.subscribtionCategory.unsubscribe();
  }

}
