import { Routes } from '@angular/router';
import { PublicNavComponent } from './+pages/+public/public-nav/public-nav.component';
import { LibrariansNavComponent } from './+pages/+librarians/librarians-nav/librarians-nav.component';
import { AdminsNavComponent } from './+pages/+admins/admins-nav/admins-nav.component';
import { PublicHomeComponent } from './+pages/+public/public-home/public-home.component';
import { PublicBooksComponent } from './+pages/+public/public-books/public-books.component';
import { PublicMembersComponent } from './+pages/+public/public-members/public-members.component';
import { LibrariansHomeComponent } from './+pages/+librarians/librarians-home/librarians-home.component';
import { LibrariansBooksComponent } from './+pages/+librarians/librarians-books/librarians-books.component';
import { LibrariansMembersComponent } from './+pages/+librarians/librarians-members/librarians-members.component';
import { AdminsHomeComponent } from './+pages/+admins/admins-home/admins-home.component';
import { AdminsLibrariansComponent } from './+pages/+admins/admins-librarians/admins-librarians.component';
import { AdminLoginComponent } from './+pages/+public/admin-login/admin-login.component';
import { LibrarianLoginComponent } from './+pages/+public/librarian-login/librarian-login.component';

export const routes: Routes = [
  {path:'public',component:PublicNavComponent,children:[
    {path:'home',component:PublicHomeComponent},
    {path:'books',component:PublicBooksComponent},
    {path:'members',component:PublicMembersComponent},
    {path:'adminlogin',component:AdminLoginComponent},
    {path:'librarianlogin',component:LibrarianLoginComponent},
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'home'}
  ]},
  {path:'librarians',component:LibrariansNavComponent,children:[
    {path:'home',component:LibrariansHomeComponent},
    {path:'books',component:LibrariansBooksComponent},
    {path:'members',component:LibrariansMembersComponent},
    {path:'borrows',component:LibrariansBooksComponent},
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'home'}
  ]},
  {path:'admins',component:AdminsNavComponent,children:[
    {path:'home',component:AdminsHomeComponent},
    {path:'librarians',component:AdminsLibrariansComponent},
    {path:'',redirectTo:'home',pathMatch:'prefix'},
    {path:'**',redirectTo:'home'}
  ]},
  {path:'',redirectTo:'/public',pathMatch:'full'},
  {path:'**',redirectTo:'/public'}
];
