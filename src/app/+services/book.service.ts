import { Injectable } from '@angular/core';
import { Book } from '../+models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
books:Book[]=[
  {id:1001,title:'c#',writer:'علی محمدی',publisher:'انتشارات نی',price:250000},
  {id:1002,title:'c++',writer:'مینا صادقی',publisher:'انتشارات تیک',price:200000},
  {id:1003,title:'SQL Lite',writer:'سارا صدیقی',publisher:'مدرسان',price:450000},

];
getBooks(){
  return this.books;
}
addBook(book:Book){
  this.books.push(book);
}

}
