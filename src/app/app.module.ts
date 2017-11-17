import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealListComponent } from './meal-list/meal-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
