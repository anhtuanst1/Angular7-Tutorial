import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Account } from './entities/account.entity';

@Component({
  selector: 'app-root',
  templateUrl: './demo4.component.html'
})
export class Demo4Component implements OnInit {
    
    registerForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ){}

    ngOnInit(){
        this.registerForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(3)]]
        });
    }

    Save(){
        var account: Account = this.registerForm.value;
        console.log('Account Info ', account);
    }
}