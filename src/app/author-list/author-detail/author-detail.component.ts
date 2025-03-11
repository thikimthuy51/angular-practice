import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../../authors.model';

@Component({
  selector: 'app-author-detail',
  imports: [],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.scss',
})
export class AuthorDetailComponent {
  @Input() author!: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
