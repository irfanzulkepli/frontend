import { Component, OnInit, ViewChild } from '@angular/core';
import { DEALSCHART } from '../../data/deals-chart.data';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexPlotOptions, ApexFill, ApexLegend, ApexDataLabels, ApexTooltip, ApexGrid } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  grid: ApexGrid;
};

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})

export class DealComponent implements OnInit {
  
  public dealsChartData = DEALSCHART;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart") chart: ChartComponent;

  constructor() {
    this.chartOptions = {
      series: [
        {
          data: this.dealsChartData.dataSet[0].data,
        }
      ],
      chart: {
        toolbar: {show: false},
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: '25%'
        }
      },
      xaxis: {
        categories: this.dealsChartData.labels
      },
      fill: {
        colors: this.dealsChartData.dataSet[0].borderColor
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
            lines: {
                show: true
            }
        },   
        yaxis: {
            lines: {
                show: true
            }
        }, 
      },
      tooltip: {
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        }
      }
    };
  }

  ngOnInit() {
  }

}
