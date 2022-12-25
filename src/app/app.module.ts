import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { HomeComponent } from './home/home/home.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DonutChartComponent,
    HomeComponent,
    PieChartComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
     NgApexchartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
