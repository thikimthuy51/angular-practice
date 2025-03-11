import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './author-list/author-list.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    AuthorListComponent,
    FormsModule,
    ToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name: string = '';
  title = 'angular-project';
  progress = 30;
  checked = true;
}
