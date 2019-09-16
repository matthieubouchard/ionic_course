import { Component, Output, EventEmitter } from "@angular/core";

import { PeopleService } from "./persons.service";

@Component({
  selector: "PersonInput",
  templateUrl: "./person-input.component.html",
  styleUrls: ["./person-input.component.css"]
})
export class PersonInputComponent {
  // @Output() createPerson = new EventEmitter<string>();  referenced in app.ts not neede w/service
  enteredName: string = "";

  constructor(private prsService: PeopleService) {}

  onCreatePerson(name: string) {
    // this.createPerson.emit(this.enteredName); used w/app not service
    this.prsService.addPerson(this.enteredName);
    this.enteredName = "";
  }
}
