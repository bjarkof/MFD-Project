import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './product';
import { DemoDataService } from './demo-data.service';

declare var jQuery:any;

@Component({

    selector: 'product-details',
    templateUrl: './app/product-details.component.html'
})
export class ProductDetailsComponent implements OnInit{
    
    constructor(private demoDataService: DemoDataService, private route: ActivatedRoute, private elementRef: ElementRef) { 
    }
    
    products: Product;



    ngOnInit() { 
        let productId = this.route.snapshot.params['productId'];
        this.products = this.demoDataService.getProductDataById(productId);
        if(this.products.on_sale === true){
            let saveamt: number = this.products.price * this.products.salepercent / 100;
            this.products.discount_price = this.products.price - saveamt;
        }
        

    }

      ngAfterViewInit() {
        var $ = jQuery;
        jQuery(this.elementRef.nativeElement).find('.thumbnail').on('click', function () {
            $('.select-img').removeClass('select-img');
            $(this).addClass('select-img');
        });

        jQuery(this.elementRef.nativeElement).find('.thumbnail').on('click', function () {
            var thmb = this;
            var src = this.src;
            $('.big-prod-image').fadeOut(400, function () {

                $(this).fadeIn(400)[0].src = src;
            });
        });



      }
}