import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe'
import { DemoDataService } from './demo-data.service';

@Component({
    selector: 'recipe-list',
    templateUrl: './app/recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
        recipes: Recipe[];


    

    totalTime(recipes: Recipe){
        return recipes.cooking_time + recipes.prep_time;
    }

    totalCost(recipes: Recipe[]){
        var totalCost = 0;
        for (let i of recipes) {
            totalCost = totalCost + i.estimated_cost; 
        }
        return totalCost;
    }

    constructor(private demoDataService: DemoDataService) { }

    ngOnInit(){
        this.recipes = this.demoDataService.getDemoData();
    
    }
}