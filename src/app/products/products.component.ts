import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private searchValue: string = '';
  toggleData: boolean = true;
  Allproducts!: any[];
  currentPage: number = 0;
  Flag: number = 0;
  set setSearchValue(value: string) {
    this.searchValue = value;
    this.searchProducts(value);
  }
  constructor(private prodServ: ProductService) { }

  ngOnInit(): void {
    this.prodServ.getProducts(0).subscribe({
      next: data => {
        this.Allproducts = data.products
      }
    })
  }

  toggleDescripion(productId: number) {
    for (const product of this.Allproducts) {
      if (product.id == productId) {
        product.showDetails = !product.showDetails
      }
    }
  }
  changePage() {
    if (this.Flag == 0) {
      if (this.currentPage <= 90) {
        this.currentPage = this.currentPage + 10;
      }
      if (this.currentPage == 100) {

        this.Flag = 1;
      }
    }
    else {
      if (this.currentPage >= 10) {
        this.currentPage = this.currentPage - 10;
        if (this.currentPage == 0) {
          this.Flag = 0;
        }
      }
    }
    this.prodServ.getProducts(this.currentPage).subscribe({
      next: (response) => {
        console.log(response);
        this.Allproducts = response.products;
      },
    });
  }
  searchProducts(ProductName: string) {
    this.prodServ.searchAllProducts(ProductName).subscribe({
      next: (data) => {
        console.log(data);
        this.Allproducts = data.products;
      }
    })
  }
}
