import { Component } from '@angular/core';

@Component({
  selector: 'app-root',// <li>, <ul>, <body> gibi <app-root> kullanıma imkan verir.
  templateUrl: './app.component.html',// './' = aynı klasör anlamında, hangi html e ait olduğunu bildirir.
  styleUrls: ['./app.component.css']// hangi css dosyalarının kullanılacağını gösterir
})
export class AppComponent {
  title:string = 'northwind';
  
}
