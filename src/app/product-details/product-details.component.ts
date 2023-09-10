import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedproduct: any;
  constructor(public route: ActivatedRoute, private prodServ: ProductService) { }

  ngOnInit(): void {
    let productId = parseInt(this.route.snapshot.paramMap.get('id')!)
    this.prodServ.getProduct(productId).subscribe({
      next: data => {
        this.selectedproduct = data;
      }
    })
  }

}
