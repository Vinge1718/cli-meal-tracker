import { Component, Input } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';

  public masterMealList: Meal[] = [
    new Meal("breakfast", 440, "cereals, nuts and yoghurt"),
    new Meal("lunch", 800, "potato chips, soda and paastries")
  ];

  selectedMeal: Meal = null;

  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }

  delete(itemToDelete: Meal){
    /*
    var delMeal = itemToDelete;
    var masterMealList = this.masterMealList;
    masterMealList=masterMealList.filter(function(item) {
    return item !== delMeal;
  }) */

    var delMeal: number = this.masterMealList.indexOf(itemToDelete);
    this.masterMealList.splice(delMeal, 1)
  }

  finishedEditting(){
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal){
    this.masterMealList.push(newMealFromChild)
  }
}
