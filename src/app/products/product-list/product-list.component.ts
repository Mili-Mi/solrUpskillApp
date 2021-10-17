import { RecursiveTemplateAstVisitor } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[] =[
  new Product(1,'iphone','New iphone launched with great features',2,102000,'mobile',
  'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901533-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTMwMTd8aW1hZ2UvanBlZ3xpbWFnZXMvaDM2L2g1OC85NDA3NzMxMTcxMzU4LmpwZ3w5NjBiYTIzZWE1Yjg5NjQzN2YyZTAxZjNhNGI2ODg0YzQ4NmZlMDZiN2EwYmVkYjlhZjA3OGIxNDZiNDEzNTc0')
];

  constructor() { }

  ngOnInit(): void {
  }

}
