import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = 'https://localhost:44364/api/';

  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ListResponseModel<Product>> {//getProducts, subscribe olunabilir bir ListResponseModel dir
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath); //newPath den gelecek datayı ListResponseModel ile eşle (map et) 
  }
  
  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath); 
  }

  add(product:Product):Observable<responseModel>{
    return this.httpClient.post<responseModel>(this.apiUrl+"products/add",product)
  }
}
