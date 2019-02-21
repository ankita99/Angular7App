import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

    employees=[];
  constructor() { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this.employees=[
        {id:1,name:"Ankita"},
        {id:2,name:"Ankita1"},
        {id:3,name:"Ankita2"}
]
  }
}
