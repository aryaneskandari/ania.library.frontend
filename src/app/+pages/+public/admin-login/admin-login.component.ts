import { Component, inject } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {} from '@angular/material/form-field';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    

  ]
})
export class AdminLoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    username: [null, Validators.required],
    password: [null, Validators.required],
  });
  onSubmit(): void {
    alert('Thanks!');
  }
}
