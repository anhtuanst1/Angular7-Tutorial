import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AdminService implements CanActivate{

    constructor(
        private router: Router
    ){}

    canActivate(){
        var valid: boolean = false;
        if(!valid){
            this.router.navigate(['./login']);
            return false;
        }else{
            return true;
        }
    }
}