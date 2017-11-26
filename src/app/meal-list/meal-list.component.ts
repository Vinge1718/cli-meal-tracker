import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal){
    this.clickSender.emit(mealToEdit);
  }

  @Output() deleteMeal = new EventEmitter();
  deleteMealItem(mealToDelete: Meal){
    this.deleteMeal.emit(mealToDelete);
  }

  public caloriesCount: string = "all";

  onChange(optionFromMenu){
    this.caloriesCount = optionFromMenu;
    console.log(this.caloriesCount);
  }
  constructor() { }

  ngOnInit() {
  }

}
