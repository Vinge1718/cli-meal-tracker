import { Component } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';

  public meals: Meal[] = [
    new Meal("Breakfast.", 300, "coffee and toast"),
    new Meal("Lunch.", 900, "pilau and two drum-sticks"),
    new Meal("Dinner.", 1200, "Ugali, Mursik and Bacon")
  ];
}
