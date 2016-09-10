import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewsletterComponent} from './newsletter.component';
import { RecipeListComponent } from './recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';

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
        path: 'productdetail/:productId',
        component: ProductDetailsComponent
    },
    {
        path: '',
        component: ProductListComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);