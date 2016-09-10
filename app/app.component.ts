import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { SliderComponent } from './slider.component';
import { RecipeListComponent } from './recipe-list.component';
import { ProductListComponent } from './product-list.component';
import { NewsletterComponent } from './newsletter.component';
import { DemoDataService } from  './demo-data.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [ HeaderComponent, 
    FooterComponent, 
    SliderComponent, 
    RecipeListComponent, 
    NewsletterComponent,
    ProductListComponent],

    providers: [ DemoDataService ]

})
export class AppComponent { 
    
    constructor(private demoDataService: DemoDataService){
        
    }
    
    ngOnInit(){
        
    }


}
