import { Component, OnInit } from '@angular/core';
import { Service1 } from './sevices/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './demo5.component.html'
})
export class Demo5Component implements OnInit {

    result1: number;
    result2: number;

    constructor(
        private service1: Service1
    ){}

    ngOnInit(){
        this.result1 = this.service1.mul(2,3);
        this.result2 = this.service1.add(2,3);
    }
}