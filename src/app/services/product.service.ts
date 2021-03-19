import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productResponseModel } from '../models/productResponseModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = 'https://localhost:44364/api/products/getall';

  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<productResponseModel> {//getProducts, subscribe olunabilir bir ProductResponseModel dir
    return this.httpClient.get<productResponseModel>(this.apiUrl); //apiUrlden gelecek datayı productResponseModel ile eşle (map et) 
  }
}
