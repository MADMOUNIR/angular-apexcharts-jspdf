import { Component, ViewChild } from "@angular/core";
import jsPDF from "jspdf";
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent  {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        id : 'pie-chart',
        width: 380,
        type: "pie"
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

    ApexCharts.exec("pie-chart", "dataURI").then(( imgURI : any) => {
      console.log(imgURI);
      imgURL = imgURI.imgURI ;

    doc.text('Chart Title', 10, 20);
    doc.addImage(imgURL, 'PNG', 10, 30 , 150 , 100);
     doc.save("pdf-chart.pdf");

    });


  }

}
