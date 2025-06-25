import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterModule, CommonModule, FormsModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  changeNav = output<string>();
  nowNavigation: string = localStorage.getItem('nowNavigation') || 'inicio';
  inputSearch = output<string>();

  router = inject(Router);

  activeSearch: boolean = false;
  vSearch: string = "";

  constructor(){
    this.changeNav.emit('inicio');
  }

  onNavigation(value: string){
    
    localStorage.setItem('nowNavigation', value);

    // console.log(localStorage.getItem('nowNavigation'));

    this.nowNavigation = value;    

    this.changeNav.emit(value);
    this.inputSearch.emit(this.vSearch);

    if(this.router.url != '/home'){
      this.router.navigate(['/home']);
    }

  }

}
