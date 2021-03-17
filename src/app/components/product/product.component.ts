import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { productResponseModel } from 'src/app/models/productResponseModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  apiUrl = 'https://localhost:44364/api/products/getall';

  constructor(private httpClient: HttpClient) {} //private yazılırsa dışarıdan bu metoda ulaşılamaz sadece bu componentte kullanılabilir

  ngOnInit(): void {// ilk çalışacak kısımdır
    this.getProducts();
  }

  getProducts() {
    this.httpClient
      .get<productResponseModel>(this.apiUrl) //apiUrlden gelecek datayı productResponseModel ile eşle (map et)
      .subscribe((response) => { //map edilmiş datayı response bağla 
        this.products = response.data; //products a response daki datayı bağla
      }); 
  }
}
