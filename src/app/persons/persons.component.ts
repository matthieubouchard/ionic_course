import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
})

export class PersonsComponent implements OnInit {
  personList: string[];
  private prsService: PersonsService;

  constructor(prsService: PersonsService) {
    this.prsService = prsService;
  }

  ngOnInit() {
    this.personList = this.prsService.persons;
  }

}