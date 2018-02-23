
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `
    <div *ngIf="childEditAnimal">
      <h3>Press button to finish editing</h3>
      <label>Species:</label>
      <input [(ngModel)]="childEditAnimal.species">
      <label>Name:</label>
      <input [(ngModel)]="childEditAnimal.name">
      <label>Age:</label>
      <input type="number" [(ngModel)]="childEditAnimal.age">
      <label>Diet:</label>
      <select [(ngModel)]="childEditAnimal.diet">
        <option [attr.value]="Herbivore">Herbivore</option>
        <option [attr.value]="Omnivore">Omnivore</option>
        <option [attr.value]="Carnivore">Carnivore</option>
      </select>
      <label>Location: </label>
      <input [(ngModel)]="childEditAnimal.location">
      <label>Number of Caretakers: </label>
      <input type="number" [(ngModel)]="childEditAnimal.caretakers">
      <label>Sex: </label>
      <input [(ngModel)]="childEditAnimal.sex">
      <label>Likes: </label>
      <input [(ngModel)]="childEditAnimal.likes">
      <label>Dislikes: </label>
      <input [(ngModel)]="childEditAnimal.dislikes">
      <button (click)="finishEditingHasBeenClicked()">Finish editing</button>
      <hr>
    </div>
  `
})

export class AnimalEditComponent {
  @Input() childEditAnimal: Animal;

  @Output() finishedEditSender = new EventEmitter();

  finishEditingHasBeenClicked() {
    this.finishedEditSender.emit();
  }
}
