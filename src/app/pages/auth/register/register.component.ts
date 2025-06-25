import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterModule, NavbarComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.scss','./register.component.scss']
})
export class RegisterComponent {

}
