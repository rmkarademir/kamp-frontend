import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  

  constructor(private productService:ProductService) {} //private yazılırsa dışarıdan bu metoda ulaşılamaz sadece bu componentte kullanılabilir

  ngOnInit(): void {// ilk çalışacak kısımdır
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((response) => { //map edilmiş datayı response bağla yada abone ol
      this.products = response.data //products a response daki datayı bağla
      this.dataLoaded = true;
    })
  }
}
