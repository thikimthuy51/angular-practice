import { Component } from '@angular/core';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { Author, authors } from '../authors.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-list',
  imports: [AuthorDetailComponent, CommonModule],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss',
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(author: Author) {
    this.currentAuthor = author;
  }

  onDelete(id: number) {
    this.authors = authors.filter((author) => author.id !== id);
    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
