import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/_models/category.model';
import { CategoryService } from 'src/app/_services/category/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  list: ICategory[] = [];

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
  }

}
