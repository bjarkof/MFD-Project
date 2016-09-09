import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from './recipe';
import { DemoDataService } from './demo-data.service';

@Component({

    selector: 'recipe-details',
    templateUrl: './app/recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {
    constructor(private demoDataService: DemoDataService, private route: ActivatedRoute) { }
    
    recipes: Recipe;

    ngOnInit() { 
        let recipeId = this.route.snapshot.params['recipeId'];
        this.recipes = this.demoDataService.getDemoDataById(recipeId);
    }
    goBack() : void {
        window.history.back();
    }
}