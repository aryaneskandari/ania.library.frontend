import { Injectable } from '@angular/core';
import { Librarian } from '../+models/librarian';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {
  librarians:Librarian[]=[
    {id:1001,fullname:'سارا کریمی',gender:'خانم',phoneNumber:'09182340090',address:'همدان'},
    {id:1002,fullname:'محمد مولایی',gender:'آقا',phoneNumber:'091310002030',address:'تهران'},
    {id:1002,fullname:'ایمان مظاهریان',gender:'آقا',phoneNumber:'091221001',address:'یزد'},
    {id:1004,fullname:'نگار رجبی',gender:'خانم',phoneNumber:'09398703010',address:'اصفهان'},
  ];

  getLibrarians(){
    return this.librarians;
  };

  addLibrarians(librarian:Librarian){
    this.librarians.push(librarian);
  }
}
