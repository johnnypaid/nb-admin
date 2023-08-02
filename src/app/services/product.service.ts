import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  endpoint = `${environment.api}/products`;

  constructor(private http: HttpClient) {}

  products(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint);
  }

  create(data: Product): Observable<Product> {
    return this.http.post<Product>(this.endpoint, data);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.endpoint}/${id}`);
  }

  update(id: number, data: Product): Observable<Product> {
    return this.http.put<Product>(`${this.endpoint}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.endpoint}/${id}`);
  }
}
