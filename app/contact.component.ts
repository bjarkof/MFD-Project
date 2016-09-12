import { Component, OnInit } from '@angular/core';

class Contact{
    fullname: string;
    email: string;
    message: string;
}

@Component({

    selector: 'contact',
    templateUrl: './app/contact.component.html'
})
export class ContactComponent implements OnInit {

    contact:Contact = new Contact();

    submitted:boolean = false;

    constructor() { }

    ngOnInit() { }

        send(){
        this.submitted = true;

    }
}