import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';
import { removeFromReadingList } from '@tmo/books/data-access';
@Component({
  selector: 'tmo-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SnackbarComponent {
  constructor(
    private readonly store: Store,
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  dismiss(item:any) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.snackBarRef.dismiss();
  }
}