import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonServiceService } from '../api/person-service.service';
import { Person, PersonDto } from '../models/Person';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.css']
})
export class PersonAddComponent implements OnInit {

  person: Person=new Person;
  name:string;
  surname:string;
  dateofbirt:string;
  constructor(private personService: PersonServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }


  savePerson(){    
   
    this.person.dateOfBirth= new Date(this.dateofbirt);
    this.personService.savePerson(this.person).subscribe(resp => {
      this.router.navigate(['']);
     // this.personlist=resp;
      /*const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
  
      for (const data of resp.body) {
        this.smartphone.push(data);
      }
      console.log(this.smartphone);*/
    });
  }

}
