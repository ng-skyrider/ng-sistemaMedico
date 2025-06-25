import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recover-password',
  imports: [CommonModule, RouterModule, NavbarComponent, FormsModule],
  templateUrl: './recover-password.component.html',
  styleUrls: ['./../login/login.component.scss','./recover-password.component.scss']
})
export class RecoverPasswordComponent {


  onRecoverPassword() {
    
  }

}
