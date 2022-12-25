import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutChartComponent } from './charts/donut-chart/donut-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { HomeComponent } from './home/home/home.component';

const ROUTES : Routes = [
  {path:'home' , component : HomeComponent},
  {path:'donut' , component : DonutChartComponent},
  {path:'pie' , component : PieChartComponent},
  {path:'line' , component : LineChartComponent},
  // {path:'not-found' , component : NotFoundComponent},
  // {path:'contact' , component : ContactComponent},
  // {path:'add-todo' , component : AddTodoComponent},
  // {path:'single-todo/:id' , component : SingleTodoComponent},
  // {path:'users' , component : UsersComponent},
  // {path:'add-user' , component : AddUserComponent},
  {path:'' , component : HomeComponent},
  {path:'**' ,pathMatch : 'full' , redirectTo : 'not-found'},

]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
