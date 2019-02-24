import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {
  public empId: any;
  constructor(private activatedRouter: ActivatedRoute, private router:Router) { }

  ngOnInit() {
   // let id = this.activatedRouter.snapshot.paramMap.get("id");

    this.activatedRouter.paramMap.subscribe((param : ParamMap) =>{
      let id= parseInt(param.get('id'));
      this.empId = id;
    })
    
  }
  showOverView(){
    this.router.navigate(["overview"], {relativeTo: this.activatedRouter});
  }

  backToEmpList(){
    let selectedId = this.empId;
    this.router.navigate(["employees", {id: selectedId}]);
  }

}
