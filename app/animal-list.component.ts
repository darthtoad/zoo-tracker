import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <h4>Filter Animals</h4>
  <h5>By Age</h5>
  <select (change)="onChange($event.target.value)">
    <option value="all">All Animals</option>
    <option value="young">Animals Aged 2 and Younger</option>
    <option value="old">Animals Older Than 2</option>
  </select>
  <h5>By Diet</h5>
  <select (change)="onChangeDiet($event.target.value)">
    <option value="all">All Animals</option>
    <option value="omnivore">Omnivores</option>
    <option value="herbivore">Herbivores</option>
    <option value="carnivore">Carnivores</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | age:filterByAge | diet:filterByDiet">
      <h3>{{currentAnimal.species}}</h3>
      <h4>{{currentAnimal.name}}</h4>
      <p>Age: {{currentAnimal.age}}</p>
      <p>Diet: {{currentAnimal.diet}}</p>
      <p>Location: {{currentAnimal.location}}</p>
      <p>Number of Caretakers: {{currentAnimal.caretakers}}</p>
      <p>Sex: {{currentAnimal.sex}}</p>
      <p>Likes: {{currentAnimal.likes}}</p>
      <p>Dislikes: {{currentAnimal.dislikes}}</p>
      <button (click)="editAnimalHasBeenClicked(currentAnimal)">Edit Animal</button>
      <hr>
    </li>
  </ul>
  `
})

export class AnimalListComponent {

  @Input() childAnimalList: Animal[];

  @Output() editAnimalSender = new EventEmitter();

  filterByAge: string = "all";

  filterByDiet: string = "all";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  onChangeDiet(optionFromMenu) {
    this.filterByDiet = optionFromMenu;
  }

  editAnimalHasBeenClicked(animalToEdit: Animal) {
    this.editAnimalSender.emit(animalToEdit);
  }

}
