import { Component, OnInit, inject } from '@angular/core';
import { BookService } from '../../../+services/book.service';
import { Book } from '../../../+models/book';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-librarians-books',
  standalone: true,
  imports: [
    MatTableModule,
  ],
  templateUrl: './librarians-books.component.html',
  styleUrl: './librarians-books.component.scss'
})
export class LibrariansBooksComponent implements OnInit{
  bookService=inject(BookService);
  data:Book[]=[];
  ngOnInit(): void {
    this.data=this.bookService.getBooks();
  }
  displayedColumns: string[] = ['id', 'title', 'writer', 'publisher','price'];

}
