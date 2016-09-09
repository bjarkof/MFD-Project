import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsletterComponent} from './newsletter.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details.component';

const appRoutes: Routes = [
    {
    path: 'newsletter',
    component: NewsletterComponent
    },
    {
        path: 'detail/:recipeId',
        component: RecipeDetailsComponent
    },
    {
        path: '',
        component: RecipeListComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);