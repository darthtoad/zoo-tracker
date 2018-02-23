import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit.component';
import { AnimalNewComponent } from './animal-new.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  AnimalEditComponent,
                  AnimalNewComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
