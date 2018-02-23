import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-new',
  template: `
    <h2>New Animal</h2>
    <div class="new-animal">
      <label>Species: </label>
      <input #species>
      <label>Name: </label>
      <input #name>
      <label>Age: </label>
      <input type="number" #age>
      <select #diet>
        <option [attr.value]="Herbivore">Herbivore</option>
        <option [attr.value]="Omnivore">Omnivore</option>
        <option [attr.value]="Carnivore">Carnivore</option>
      </select>
      <label>Location: </label>
      <input #location>
      <label>Number of Caretakers: </label>
      <input type="number" #caretakers>
      <label>Sex: </label>
      <input #sex>
      <label>Likes: </label>
      <input #likes>
      <label>Dislikes: </label>
      <input #dislikes>
      <button (click)="submitForm(species.value, name.value, age.value, diet.value, location.value, caretakers.value, sex.value, likes.value, dislikes.value); species.value=''; name.value=''; age.value=''; diet.value=''; location.value=''; caretakers.value=''; sex.value=''; likes.value=''; dislikes.value=''">Register New Animal</button>
    </div>
  `
})

export class AnimalNewComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
