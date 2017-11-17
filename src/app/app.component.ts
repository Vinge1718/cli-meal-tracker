import { Component, Input } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';

  public masterMealList: Meal[] = [];

  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }

  finishedEditting(){
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal){
    this.masterMealList.push(newMealFromChild)
  }
}
