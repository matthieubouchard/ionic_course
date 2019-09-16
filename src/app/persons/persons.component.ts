import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { PeopleService } from "./persons.service";

@Component({
  selector: "Persons",
  templateUrl: "./persons.component.html",
  styleUrls: ["./persons.component.css"]
})
export class PersonsComponent implements OnInit, OnDestroy {
  // @Input() peopleList: string[];  can be found from app
  private peopleListSubs: Subscription;

  peopleList: string[];
  isFetching: boolean = false;
  // private prsService: PeopleService;

  constructor(private prsService: PeopleService) {
    // this.peopleList = prsService.people;
  }

  removePerson(name: string) {
    this.prsService.removePerson(name);
  }

  ngOnInit() {
    // this.peopleListSubs.fetchPeople();
    // this.peopleList = this.prsService.people;
    this.peopleListSubs = this.prsService.peopleChanged.subscribe(people => {
      this.peopleList = people;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPeople();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.peopleListSubs.unsubscribe();
  }
}
