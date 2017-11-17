import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-new-meal',
  templateUrl: './new-meal.component.html',
  styleUrls: ['./new-meal.component.css']
})
export class NewMealComponent implements OnInit {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calories: number, description: string){
    var newMealToAdd: Meal = new Meal (name, calories, description);
    this.newMealSender.emit(newMealToAdd);
  }
  constructor() { }

  ngOnInit() {
  }

}
