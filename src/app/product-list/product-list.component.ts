import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  viewType:string;
  productList:Product[] =[{
    title: "Title products",
    description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nostrum mollitia optio dolore nisi temporibus quam omnis, molestiae perspiciatis est voluptatibus. Mollitia assumenda illo ex quidem ut facere est temporibus.",
    price:20000,
    img:"http://placehold.it/400x250/000/fff"
  }, {
    title: "Title products",
    description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nostrum mollitia optio dolore nisi temporibus quam omnis, molestiae perspiciatis est voluptatibus. Mollitia assumenda illo ex quidem ut facere est temporibus.",
    price:20000,
    img:"http://placehold.it/400x250/000/fff"
  }, {
    title: "Title products",
    description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nostrum mollitia optio dolore nisi temporibus quam omnis, molestiae perspiciatis est voluptatibus. Mollitia assumenda illo ex quidem ut facere est temporibus.",
    price:20000,
    img:"http://placehold.it/400x250/000/fff"
  }]
  ChangeView(view){
    console.log(view);
    this.viewType=view;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
