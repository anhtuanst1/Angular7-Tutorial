import { Component, OnInit } from '@angular/core';
import { ProductService } from './sevices/product.service';
import { ProductRest } from './entities/product_rest.entity';

@Component({
  selector: 'app-root',
  templateUrl: './demo7.component.html'
})
export class Demo7Component implements OnInit {

    products: ProductRest[] = [{
        _id: '1',
        name: 'voice_mail',
        price: 23,
        status: true
    },{
        _id: '2',
        name: 'voice_premium',
        price: 29,
        status: false
    }];
    products_find: ProductRest[] = [{
        _id: "1",
        name: "abc",
        price: 1,
        status: true
    }];
    result: string = '';

    constructor(
        private productService: ProductService
    ){}

    ngOnInit(){
        this.productService.findAll().then(
            res => {
                this.products = res;
                console.log(this.products);
            },
            error => {
                console.log(error);
            }
        );
    }

    Search(event: any){
        this.result = event.target.value;
        this.productService.find(event.target.value).then(
            res => {
                this.products_find = res;
                console.log(this.products_find);
            },
            error => {
                console.log(error);
            }
        );
    }
}