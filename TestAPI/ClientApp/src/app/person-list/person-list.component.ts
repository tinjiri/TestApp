import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { PersonServiceService } from '../api/person-service.service';
import { Person, PersonDto } from '../models/Person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  personlist:Person[]=[];
  count:number;
 

  constructor(private personService: PersonServiceService, private router: Router) { }

  ngOnInit(): void {
    //this.personlist=[{"name":"test","surname":"bob", "dateOfBirth":"2002-02-03"}];
    this.getPeople();
  }



  getPeople(){
    this.personService.get().subscribe(resp => {
      console.log(resp);
      this.personlist=resp;
      /*const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
  
      for (const data of resp.body) {
        this.smartphone.push(data);
      }
      console.log(this.smartphone);*/
    });
    this.count=this.personlist.length;
  }
/*
  getSmartphones() {
    this.api.getSmartphone()
    .subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
  
      for (const data of resp.body) {
        this.smartphone.push(data);
      }
      console.log(this.smartphone);
    });
  }*/

  btnClick(){
    this.router.navigate(['/addperson']);
  }
  
}
