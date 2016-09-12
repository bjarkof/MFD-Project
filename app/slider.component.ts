import { Component, ElementRef, OnInit } from '@angular/core';

declare var jQuery:any;

@Component({
    selector: 'slider',
    templateUrl: './app/slider.component.html'
})
export class SliderComponent implements OnInit {
    
    constructor(private elementRef: ElementRef) { }

    ngOnInit() { }

    ngAfterViewInit(){
        var $ = jQuery;
        
        $(this.elementRef.nativeElement).find('.slider').slick({
            autoplay: false,
            appendArrows: $('.slider'),
            nextArrow: '<button type="button" class="slick-next slick-arrow"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
            prevArrow: '<button type="button" class="slick-prev slick-arrow"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>'
        });
    }
}