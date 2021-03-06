import { Injectable } from '@angular/core';
import { RECIPEDATA } from './demo-data';
import { PRODUCTSDATA } from './demo-data';

@Injectable()
export class DemoDataService{
    getDemoData(){
        return RECIPEDATA;
    }
    getProductData(){
        return PRODUCTSDATA;
    }

    getDemoDataById(id: number){
        let result = RECIPEDATA.filter(function(obj){
            return obj.id == id;
        });
        console.log(result);
        if (result.length > 0) {
            return result[0];
        }
        else {
            return null;
        }
    }

    getProductDataById(id: number){
        let result = PRODUCTSDATA.filter(function(obj){
            return obj.id == id;
        });
        console.log(result);
        if (result.length > 0) {
            return result[0];
        }
        else {
            return null;
        }
    }
}