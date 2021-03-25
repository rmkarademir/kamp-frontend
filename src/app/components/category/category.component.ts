import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : category[]=[];
  currentCategory :category;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => { //map edilmiş datayı response bağla yada abone ol
      this.categories = response.data //categories e response daki datayı bağla
    })
  }
  setCurrentCategory(category:category){
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category:category){
    if(category == this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  getAllCategoryClass(){
    if(!this.currentCategory){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
