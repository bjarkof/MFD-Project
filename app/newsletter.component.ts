import { Component, OnInit } from '@angular/core';

class Newsletter{
    fullname: string;
    email: string;
    newstype: string;
}

@Component({
    selector: 'newsletter',
    templateUrl: './app/newsletter.component.html'
})
export class NewsletterComponent implements OnInit {
    newstype:string[] = ["Baking", "Starters", "Dinner"];

    newsletter:Newsletter = new Newsletter();

    submitted:boolean = false;

    constructor() { }

    ngOnInit() { }

    signup(){
        this.submitted = true;

    }
}