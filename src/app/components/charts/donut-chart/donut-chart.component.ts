import { Component, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements AfterViewInit {
  @Input() data: { label: string, value: number, color: string }[] = [
    { label: 'Completed', value: 50, color: '#6A3E9C' }, // Purple
    { label: 'Cancelled', value: 30, color: '#3A86FF' }, // Blue
    { label: 'Pending', value: 20, color: '#83D475' }   // Green
  ];

  @ViewChild('chart') private chartContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.data && this.chartContainer) {
      this.createChart();
    }
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const radius = Math.min(width, height) / 2;

    // Remove any existing SVG to prevent duplicates on re-render
    d3.select(element).select('svg').remove();

    const svg = d3.select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie<{ label: string, value: number, color: string }>()
      .sort(null) // Do not sort, maintain original order
      .value(d => d.value);

    const arc = d3.arc<any, d3.PieArcDatum<{ label: string, value: number, color: string }>>()
      .innerRadius(radius * 0.6) // This makes it a donut chart
      .outerRadius(radius * 0.95);

    const arcs = svg.selectAll('.arc')
      .data(pie(this.data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc)
      .attr('fill', d => d.data.color)
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    // Optional: Add text labels for percentages if needed
    // arcs.append('text')
    //   .attr('transform', d => `translate(${arc.centroid(d)})`)
    //   .attr('dy', '0.35em')
    //   .attr('text-anchor', 'middle')
    //   .style('fill', 'white')
    //   .style('font-size', '10px')
    //   .text(d => `${d.data.value}%`);
  }
}
