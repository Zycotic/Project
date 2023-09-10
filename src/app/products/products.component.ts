import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  toggleData: boolean = true;
  Allproducts!: any[];

  constructor(private prodServ: ProductService) { }

  ngOnInit(): void {
    this.prodServ.getProducts().subscribe({
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

}
