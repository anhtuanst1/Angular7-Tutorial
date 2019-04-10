import { Component, OnInit } from '@angular/core';
import { Product } from './entities/product.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  age: number;
  fullname: string;
  status: boolean;
  phone: any;
  product: Product;
  products: Product[];

  constructor(){}

  ngOnInit(){
    this.age = 20;
    this.fullname = "Tuan";
    this.status = true;
    this.phone = 1234;

    this.product = {
      id: "01",
      name: "img1",
      photo: "img1.png",
      price: 5,
      quantity: 9
    }

    this.products = [
      {
        id: "01",
        name: "img1",
        photo: "img1.png",
        price: 5,
        quantity: 9
      },
      {
        id: "02",
        name: "img2",
        photo: "img2.png",
        price: 2,
        quantity: 9
      },
      {
        id: "03",
        name: "img3",
        photo: "img3.png",
        price: 3,
        quantity: 9
      }
    ];

  }

}
