import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseAPIUrl='https://localhost:7219/';
  constructor(private http:HttpClient) { }
  // GET /api/Products  
  GetProductList():Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseAPIUrl+'/api/Products');
  }

  //POST /api/Products

  //GET /api/Products/{id}

  //PUT /api/Products/{id}

  //DELETE /api/Products/{id}


}
