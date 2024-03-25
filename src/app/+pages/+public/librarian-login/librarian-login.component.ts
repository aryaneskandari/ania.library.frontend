import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-librarian-login',
  templateUrl: './librarian-login.component.html',
  styleUrl: './librarian-login.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class LibrarianLoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({

    username: [null, Validators.required],
    password: [null, Validators.required],
  });


  onSubmit(): void {
    alert('Thanks!');
  }
}
