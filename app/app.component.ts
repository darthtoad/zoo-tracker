import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>Animal Tracker</h1>
      <h3>Helping the Quahog Zoo keep track of their animals</h3>
    </div>
    <animal-list [childAnimalList]="animals"></animal-list>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [new Animal("Gerenuk", "Haile", 4, "Acacia, Herb Mix, Apples", "Savannah Zone", 3, "Male", "Apples, Belly Rubs", "Milk, Cole Slaw"), new Animal("Eastern Lowland Gorilla", "Naima", 15, "Bananas, Cantelope, Insect Mix, Vine Peel", "Rainforest Zone", 10, "Female", "Backscratches, Cantelopes", "Loud Noises, Nickleback"), new Animal("Capybara", "Jorge", 3, "Grass Mix, Insect Mix, Lillies, Papaya, Bark Mix", "Andean Zone", 4, "Male", "Fetch, Swimming", "Losing his keys, the DMV")];
}