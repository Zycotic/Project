import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(value:number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products?limit=10&skip=${value}`)
  }
  getAllProducts(): Observable<any> {
    return this.http.get(`https://dummyjson.com/products?limit=100`)
  }

  getProduct(prodID: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${prodID}`)
  }
  
  searchAllProducts(ProductName:string):Observable<any>
  {
    if(ProductName == '') 
    {
      return this.getAllProducts();
    }
    else
    {
      return this.http.get(`https://dummyjson.com/products/search?q=${ProductName}`)
    }
  }
}