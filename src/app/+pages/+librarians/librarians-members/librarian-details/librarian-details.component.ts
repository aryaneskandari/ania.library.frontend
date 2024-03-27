import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { LibrarianService } from '../../../../+services/librarian.service';
import { Librarian } from '../../../../+models/librarian';

@Component({
  selector: 'app-librarian-details',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './librarian-details.component.html',
  styleUrl: './librarian-details.component.scss'
})
export class LibrarianDetailsComponent  {
  private fb = inject(FormBuilder);
  librarianForm = this.fb.group({
    id: null,
    fullname: [null, Validators.required],
    gender: [null, Validators.required],
    phoneNumber: [null, Validators.required],
    address: null,
  });



}
