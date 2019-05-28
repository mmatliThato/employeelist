import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})




export class EmployeelistComponent implements OnInit {
title='Employees List'
employees= [
];
model2:any={};
model:any={};
addemployee(){
  this.employees.push(this.model);

}
deleteEmployee(i){
  this.employees.splice(i, 1);
}
myValue;
editemployee(k){
  
this.model2.name=this.employees[k].name
this.model2.Lastname=this.employees[k].Lastname
this.model2.Organisation=this.employees[k].Organisation
this.model2.email=this.employees[k].email
this.model2.Bio=this.employees[k].Bio
this.model2.image=this.employees[k].image
this.model2.cellnumber=this.employees[k].cellnumber
this.myValue=k;
}
updateemployee(){
  console.log();
  let k = this.myValue
  for (let i=0; i<this.employees.length;i++){
  if (i==k){
    this.employees[i]=this.model2;
    this.model2={};

  }
  }

}
  constructor() { }

  ngOnInit() {
  }

}
