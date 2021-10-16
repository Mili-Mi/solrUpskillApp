import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
product:Product[] =[];

  constructor() { }

  ngOnInit(): void {
  }

}
