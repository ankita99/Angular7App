import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "employees", component: EmployeesComponent},
    {path: "employeeDetails/:id", component: EmployeeDetailsComponent},
    {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const AppRoutesModule = [HomeComponent, EmployeesComponent, EmployeeDetailsComponent];
