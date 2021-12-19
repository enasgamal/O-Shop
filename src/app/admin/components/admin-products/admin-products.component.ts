import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy, OnInit {

  // products$!: any;
  products!: any[];
  filterdProduct!: any[];
  subscribtion!: Subscription;

  displayedColumns: string[] = ['photo', 'title', 'price', 'edit'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;
  search: any;



  constructor(private productService: ProductService) {
    this.subscribtion = this.productService.getAll().snapshotChanges().pipe(map(products => {
      this.products = products
      this.filterdProduct = this.products
      console.log(this.filterdProduct)
      this.dataSource = new MatTableDataSource(this.filterdProduct);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;

    })).subscribe();

  }
  ngOnInit(): void {

  }

  filter(query: string) {
    console.log("quey", query)
    this.filterdProduct = (query) ?
      this.products.filter(product =>
        product.payload.val().title.toLowerCase().
          includes(query.toLowerCase())) : this.products;
  }

  applyFilter() {
    this.dataSource.data = (this.search) ? this.products.filter(product =>
      product.payload.val().title.toLowerCase().
        includes(this.search.trim().toLowerCase())) : this.products;
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
