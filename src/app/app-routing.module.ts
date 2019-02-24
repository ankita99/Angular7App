import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "employees", component: EmployeesComponent},
    {path: "employeeDetails/:id", component: EmployeeDetailsComponent,
    children: [
      {
        path: "overview", component: OverviewComponent
      }
    ]
  },
    {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, EmployeesComponent, EmployeeDetailsComponent, OverviewComponent];
