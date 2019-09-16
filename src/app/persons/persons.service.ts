import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({ providedIn: "root" }) // inject services into other components
export class PeopleService {
  peopleChanged = new Subject<string[]>();
  people: string[];

  constructor(private http: HttpClient) {}

  fetchPeople() {
    const url = "https://swapi.co/api/people";
    this.http
      .get<any>(url)
      // .pipe(
      //   map(d => {
      //     // console.log("da", d);
      //     console.log(d.results);
      //     return d.results.map(c => {
      //       console.log(c);
      //       return c.name;
      //     });
      //   })
      // )
      .subscribe(d => {
        const names = d.results.map(c => c.name);
        this.peopleChanged.next(names);
      });
    // console.log("people", people);
    // this.people = people;
  }

  addPerson(name: string) {
    console.log("new preson ", name);
    this.people.push(name);
    this.peopleChanged.next(this.people);
  }

  removePerson(name: string) {
    this.people = this.people.filter(person => person !== name);
    this.peopleChanged.next(this.people);
    console.log(this.people);
  }
}
