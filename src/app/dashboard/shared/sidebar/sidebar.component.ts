import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isPatientMenuOpen = false;
  isPersonalSaludMenuOpen = false;
  isRegistrarUsuarios = false;
  isConfiguracion = false;

  togglePatientMenu() {
    this.isPatientMenuOpen = !this.isPatientMenuOpen;
  }

  togglePersonalSaludMenu() {
    this.isPersonalSaludMenuOpen = !this.isPersonalSaludMenuOpen;
  }

  toggleRegistrarUsuarios() {
    this.isRegistrarUsuarios = !this.isRegistrarUsuarios;
  }

  toggleConfiguracion() {
    this.isConfiguracion = !this.isConfiguracion;
  }
}
