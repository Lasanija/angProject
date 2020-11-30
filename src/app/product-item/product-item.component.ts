import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
@Input() inputProduct: Product;
  constructor() { }

  ngOnInit(): void {
    console.log(this.inputProduct);
  }

}
