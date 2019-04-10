import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ProductRest } from '../entities/product_rest.entity';

@Injectable()
export class ProductService{

    private BASE_URL: string = 'http://193.168.40.68:3000/api/product/';

    constructor(
        private httpClient: HttpClient
    ){}

    findAll(){
        return this.httpClient.get(this.BASE_URL + 'find_all')
                                .toPromise()
                                .then(res => res as ProductRest[])
    }

    find(ID: string){
        return this.httpClient.get(this.BASE_URL + 'find/' + ID)
                                .toPromise()
                                .then(res => res as ProductRest[])
    }
}