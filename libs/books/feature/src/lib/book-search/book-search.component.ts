import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addToReadingList,
  clearSearch,
  getAllBooks,
  ReadingListBook,
  searchBooks,
  getReadingList
} from '@tmo/books/data-access';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Book } from '@tmo/shared/models';
import { SnackbarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'tmo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {
  books: ReadingListBook[];

  searchForm = this.fb.group({
    term: ''
  });

  constructor(
    private readonly store: Store,
    private readonly fb: FormBuilder,
    private readonly snackBar: MatSnackBar
  ) {}

  get searchTerm(): string {
    return this.searchForm.value.term;
  }

  ngOnInit(): void {
    this.store.select(getAllBooks).subscribe(books => {
      this.books = books;
    });
  }

  formatDate(date: void | string) {
    return date
      ? new Intl.DateTimeFormat('en-US').format(new Date(date))
      : undefined;
  }

  addBookToReadingList(book: Book) {
    this.addBookSnackBar();
    this.store.dispatch(addToReadingList({ book }));
  }

  searchExample() {
    this.searchForm.controls.term.setValue('javascript');
    this.searchBooks();
  }

  searchBooks() {
    if (this.searchForm.value.term) {
      this.store.dispatch(searchBooks({ term: this.searchTerm }));
    } else {
      this.store.dispatch(clearSearch());
    }
  }

  addBookSnackBar() {
    const message = 'Reading List';
    const durationInSeconds = 2;
    
    this.snackBar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: durationInSeconds * 1000
    });

    this.store.select(getReadingList)
    .subscribe(res => {
      let resBook = res[res.length - 1] ? res[res.length - 1] : undefined;
      if (resBook) {
        localStorage.setItem('book',JSON.stringify(resBook));
      }
    });

  }

}
