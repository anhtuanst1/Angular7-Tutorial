import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

    constructor(
      private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(){
      this.activatedRoute.paramMap.subscribe(params => {
        var id1 = params.get('id1');
        var id2 = params.get('id2');
        console.log('id1 ', id1);
        console.log('id2 ', id2);
      });
    }
}