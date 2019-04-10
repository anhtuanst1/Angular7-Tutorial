import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo3.component.html'
})
export class Demo3Component implements OnInit {
    result1: string;
    result2: string;
    ngOnInit(){
        this.result1 = "123";
        this.result2 = "abc";
    }
}