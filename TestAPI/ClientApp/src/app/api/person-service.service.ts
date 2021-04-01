import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, PersonDto } from '../models/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  readonly baseUrl='http://localhost:56869/api/Person';
  constructor(private httpClient: HttpClient) { }

  personlist:Person[]=[];


  get(): Observable<Person[]> {
        return this.httpClient.get<Person[]>(this.baseUrl+'/persons');
  }

  savePerson(person:Person){  
    return this.httpClient.post(this.baseUrl+'/saveperson',person);
  }
}
