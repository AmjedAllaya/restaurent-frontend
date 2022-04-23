import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: IProduct[] = [];

  constructor(private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

}
