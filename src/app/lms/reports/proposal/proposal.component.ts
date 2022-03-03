import { Component, OnInit, ViewChild } from '@angular/core';
import { PROPOSALCHART } from '../../data/proposal-chart.data';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexPlotOptions, ApexLegend, ApexDataLabels, ApexTooltip, ApexGrid } from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  grid: ApexGrid;
};

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  public proposalChart = PROPOSALCHART;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart") chart: ChartComponent;
  
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [1,1],
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
          barHeight: '20%'
        }
      },
      xaxis: {
        categories: [this.proposalChart[0].owner, this.proposalChart[1].owner],
        max: 2
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
