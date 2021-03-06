import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal';

@Pipe({
  name: 'calorieCount',
  pure: false
})
export class CalorieCountPipe implements PipeTransform {

  transform(input: Meal[], caloriesCount) {
    var output: Meal[] = [];
    if(caloriesCount==="High Calories"){
      for(var i = 0; i<input.length; i++){
        if(input[i].calories>=500){
          output.push(input[i]);
        }
      }
      return output;
    }else if(caloriesCount==="Low Calory"){
      for(var i = 0; i<input.length; i++){
        if(input[i].calories<500){
          output.push(input[i]);
        }
      }
      return output;
    }else {
      return input;
    }

  }

}
