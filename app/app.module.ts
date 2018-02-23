import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit.component';
import { AnimalNewComponent } from './animal-new.component';
import { FormsModule }  from '@angular/forms';
import { AgePipe } from './age.pipe';
import { DietPipe } from './diet.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
                  AnimalListComponent,
                  AnimalEditComponent,
                  AnimalNewComponent,
                  AgePipe,
                  DietPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
