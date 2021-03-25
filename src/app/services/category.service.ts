import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiUrl = 'https://localhost:44364/api/categories/getall';

  constructor(private httpClient: HttpClient) { }
  
  getCategories():Observable<ListResponseModel<category>> {//getCategories, subscribe olunabilir bir ListResponseModel dir
    return this.httpClient.get<ListResponseModel<category>>(this.apiUrl); //apiUrlden gelecek datayı ListResponseModel ile eşle (map et) 
  }
}