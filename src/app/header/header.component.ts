import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  title:string='H&M';
  headLinks:string[]=["Home","Products","About us","contact"];
  language:string='En-Us';
constructor (){}
  changelanguage() {
this.language=this.language=='En-Us' ? 'Ar-Sa' : 'En-Us' ;

}}