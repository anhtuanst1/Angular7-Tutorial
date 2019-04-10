import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo2.component.html'
})
export class Demo2Component implements OnInit {

    result: string = '';
    result2: string = '';

    ngOnInit(){

    }

    ClickMe(){
        alert("Hello ...");
    }

    Search(event: any){
        this.result = event.target.value;
    }

    selectCategory(event: any){
        this.result2 = event.target.value;
    }

}