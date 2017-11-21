import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { MealListComponent } from './meal-list/meal-list.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { NewMealComponent } from './new-meal/new-meal.component';
import { CalorieCountPipe } from './calorie-count.pipe';
import { MealComponent } from './meal/meal.component';



@NgModule({
  declarations: [
    AppComponent,
    MealListComponent,
    EditMealComponent,
    NewMealComponent,
    CalorieCountPipe,
    MealComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
