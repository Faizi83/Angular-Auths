import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://localhost:65123/api/working';

  constructor(private http: HttpClient) { }

  addProduct(productData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add-product`, productData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get-products`);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-product/${id}`);
  }

  updateProduct(id: number, productData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update-product/${id}`, productData, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete-product/${id}`);
  }
}

