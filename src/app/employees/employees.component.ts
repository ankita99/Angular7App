import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Employee } from '../classes/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  constructor(private appDataService: AppDataService, private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.appDataService.getEmployees()
    .subscribe(
       data =>this.employees = data
    )
  }
  onclick(){
      console.log("test");
      this.router.navigate(['/employeeDetails']);
  }
}
