import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`https://dummyjson.com/products`)
  }

  getProduct(prodID: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${prodID}`)
  }
}


// I am going to complete the service and use my api to fetch the data