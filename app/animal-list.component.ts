import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList>
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

  editAnimalHasBeenClicked(animalToEdit: Animal) {
    this.editAnimalSender.emit(animalToEdit);
  }

}
