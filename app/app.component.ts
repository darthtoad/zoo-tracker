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
    <animal-list [childAnimalList]="animals" (editAnimalSender)="editAnimal($event)"></animal-list>
    <animal-edit [childEditAnimal]="currentAnimal" (finishedEditSender)="finishEditAnimal()"></animal-edit>
    <animal-new (newAnimalSender)="newAnimal($event)"></animal-new>
  </div>
  `
})

export class AppComponent {
  animals: Animal[] = [new Animal("Gerenuk", "Haile", 4, "Herbivore", "Savannah Zone", 3, "Male", "Apples, Belly Rubs", "Milk, Cole Slaw"), new Animal("Eastern Lowland Gorilla", "Naima", 15, "Omnivore", "Rainforest Zone", 10, "Female", "Backscratches, Cantelopes", "Loud Noises, Nickleback"), new Animal("Capybara", "Jorge", 3, "Herbivore", "Andean Zone", 4, "Male", "Fetch, Swimming", "Losing his keys, the DMV")];

  currentAnimal = null;

  editAnimal(currentAnimal) {
    this.currentAnimal = currentAnimal;
  }

  finishEditAnimal(currentAnimal) {
    this.currentAnimal = null;
  }

  newAnimal(animal: Animal) {
    this.animals.push(animal);
  }
}
