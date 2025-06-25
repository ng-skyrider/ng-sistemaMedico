import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutChartComponent } from '../../../components/charts/donut-chart/donut-chart.component';
import { BarChartComponent } from '../../../components/charts/bar-chart/bar-chart.component';

@Component({
  selector: 'app-dashboard-init',
  standalone: true,
  imports: [
    CommonModule,
    DonutChartComponent,
    BarChartComponent
  ],
  templateUrl: './dashboard-init.component.html',
  styleUrl: './dashboard-init.component.scss'
})
export class DashboardInitComponent {

}
