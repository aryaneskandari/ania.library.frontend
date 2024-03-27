import { Component, OnInit, inject } from '@angular/core';
import { LibrarianService } from '../../../+services/librarian.service';
import { Librarian } from '../../../+models/librarian';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { LibrarianDetailsComponent } from './librarian-details/librarian-details.component';

@Component({
  selector: 'app-librarians-members',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    CommonModule,
    LibrarianDetailsComponent
  ],
  templateUrl: './librarians-members.component.html',
  styleUrl: './librarians-members.component.scss'
})
export class LibrariansMembersComponent implements OnInit {
addLibrarian() {
  this.currentAction='add';
}
  currentAction='list';
  librarianService=inject(LibrarianService);
  data:Librarian[]=[];

  ngOnInit(): void {
    this.data=this.librarianService.getLibrarians();
  };
  displayedColumns: string[] = [ 'fullname', 'gender', 'phoneNumber','address'];

}
