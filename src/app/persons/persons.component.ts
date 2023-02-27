import { Component, OnInit } from '@angular/core';
import { PERSONS } from '../mock-persons';
import { Person } from '../person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  personalId:string = "";
  dateOfBirth:string = "";
  selectedPersons:Person[] = [];
  errorMsg:string= "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit():void{
    console.log()
    if ((this.dateOfBirth.length > 0 && this.personalId.length === 0) ||  (this.dateOfBirth.length === 0 && this.personalId.length > 0)){
      this.errorMsg ="You must set person ID and date of birth";
      return;
    }
    else if (this.dateOfBirth.length === 0 && this.personalId.length  === 0 ){
      this.errorMsg = "";
      this.getAllPersons();
    } else {
      this.errorMsg = "";
      this.getSelectedPersons();
    }
  }

  getAllPersons():void {
    this.selectedPersons = PERSONS;
  }


  getSelectedPersons():void {
    this.selectedPersons = PERSONS;
  }


}
