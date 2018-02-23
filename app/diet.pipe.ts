import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "diet",
  pure: false
})

export class DietPipe implements PipeTransform {
  transform(input: Animal[], desiredDiet){
    let output: Animal[] = [];
    if (desiredDiet.toLowerCase() === "all") {
      return input;
    } else if (desiredDiet.toLowerCase() === "omnivore") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet.toLowerCase() === "omnivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet.toLowerCase() === "herbivore") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet.toLowerCase() === "herbivore") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      for (let i = 0; i < input.length; i++) {
        if (input[i].diet.toLowerCase() === "carnivore") {
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
