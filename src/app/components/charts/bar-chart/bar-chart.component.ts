import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

export interface BarChartDataPoint {
  month: string;
  death: number;
  recovery: number;
}

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit {
  @Input() data: BarChartDataPoint[] = [
    { month: 'Jan', death: 50, recovery: 150 },
    { month: 'Feb', death: 70, recovery: 180 },
    { month: 'Mar', death: 60, recovery: 160 },
    { month: 'Apr', death: 80, recovery: 190 },
    { month: 'May', death: 90, recovery: 220 },
    { month: 'Jun', death: 75, recovery: 200 },
  ];

  @ViewChild('barchart') private chartContainer!: ElementRef;

  private readonly margin = { top: 20, right: 20, bottom: 40, left: 50 }; // Adjusted bottom for x-axis labels
  private readonly deathColor = '#3A86FF'; // Blue from donut chart
  private readonly recoveryColor = '#6A3E9C'; // Purple from donut chart

  constructor() { }

  ngAfterViewInit(): void {
    if (this.data && this.chartContainer) {
      this.createChart();
    }
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    const width = elementWidth - this.margin.left - this.margin.right;
    const height = elementHeight - this.margin.top - this.margin.bottom;

    d3.select(element).select('svg').remove();

    const svg = d3.select(element).append('svg')
      .attr('width', elementWidth)
      .attr('height', elementHeight)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

    const series = d3.stack<BarChartDataPoint>()
        .keys(['death', 'recovery'])
        (this.data);

    const xScale = d3.scaleBand()
      .domain(this.data.map(d => d.month))
      .range([0, width])
      .padding(0.3); // Increased padding for thinner bars

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(series, d => d3.max(d, s => s[1])) || 0])
      .nice()
      .range([height, 0]);

    // X-axis
    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).tickSizeOuter(0))
      .selectAll('text')
        .style('font-size', '10px'); // Smaller font for x-axis labels

    // Y-axis
    svg.append('g')
      .call(d3.axisLeft(yScale).ticks(5).tickSizeOuter(0))
      .selectAll('text')
        .style('font-size', '10px'); // Smaller font for y-axis labels

    // Remove domain line from axes for cleaner look
    svg.selectAll('.domain').remove();

    // Bars
    svg.append('g')
      .selectAll('g')
      .data(series)
      .join('g')
        .attr('fill', (d, i) => (d.key === 'death' ? this.deathColor : this.recoveryColor))
      .selectAll('rect')
      .data(d => d)
      .join('rect')
        .attr('x', d => xScale(d.data.month) || 0)
        .attr('y', d => yScale(d[1]))
        .attr('height', d => yScale(d[0]) - yScale(d[1]))
        .attr('width', xScale.bandwidth());
  }
}
