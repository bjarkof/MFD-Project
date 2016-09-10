import { Component, OnInit } from '@angular/core';
import { Product } from './product'
import { DemoDataService } from './demo-data.service';

@Component({
    selector: 'product-list',
    templateUrl: './app/product-list.component.html'
})
export class ProductListComponent implements OnInit {
        products: Product[];


    


    constructor(private demoDataService: DemoDataService) { }

    ngOnInit(){
        this.products = this.demoDataService.getProductData();
    
    }
}