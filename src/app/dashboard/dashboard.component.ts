import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutChartComponent } from '../components/charts/donut-chart/donut-chart.component';
import { BarChartComponent } from '../components/charts/bar-chart/bar-chart.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule,
    SidebarComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

}
