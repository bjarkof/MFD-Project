import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './product';
import { DemoDataService } from './demo-data.service';

@Component({

    selector: 'product-details',
    templateUrl: './app/product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
    constructor(private demoDataService: DemoDataService, private route: ActivatedRoute) { }
    
    products: Product;

    ngOnInit() { 
        let productId = this.route.snapshot.params['productId'];
        this.products = this.demoDataService.getProductDataById(productId);
    }
}