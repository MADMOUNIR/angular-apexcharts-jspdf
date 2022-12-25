import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexTooltip,
  ApexYAxis,
  ApexGrid,
} from 'ng-apexcharts';
import { ApexOptions } from 'apexcharts';
import jsPDF from 'jspdf';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent  {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;


  constructor() {

    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        id : 'donut-chart' ,
        type: "donut"
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  downloadPDF() {

    // Default export is a4 paper, portrait, using millimeters for units
    const doc = new jsPDF("l", "mm", "a4");
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    //Add Chart
    var imgURL = '' ;

    ApexCharts.exec("donut-chart", "dataURI").then(( imgURI : any) => {
      console.log(imgURI);
      imgURL = imgURI.imgURI ;

    doc.text('Chart Title', 10, 20);
    doc.addImage(imgURL, 'PNG', 10, 30 , 200 , 100);
     doc.save("pdf-chart.pdf");

    });


   }


  }

