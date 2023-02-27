import { Component, OnInit } from '@angular/core';
import { PERSONS } from '../mock-persons';
import { Person } from '../person';
import { PersonService } from '../person.service';

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

  constructor(private personService: PersonService) { }

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
    this.personService.getPersonList().subscribe(
      data => {
        this.selectedPersons = data;
      }
    )    
  }

  getSelectedPersons():void {
    // this.selectedPersons = this.personService.getSelected(this.personalId, this.dateOfBirth);
    this.personService.getSelectedPersonList(this.personalId,this.dateOfBirth).subscribe(
      data => {
        this.selectedPersons = data;
      }
    )    
  }

}
