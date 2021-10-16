import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
product:Product[] =[
  new Product(1,'iphone','New iphone launched with great features',2,102000,'mobile',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fiphone-12&psig=AOvVaw0W3JlThkNxGCYHRy-5Vokx&ust=1634491399832000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOCyxo25z_MCFQAAAAAdAAAAABAD')
];

  constructor() { }

  ngOnInit(): void {
  }

}
