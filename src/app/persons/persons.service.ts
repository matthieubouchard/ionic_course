import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class PersonsService {
  persons: string[] = ['mateo', 'liza', 'liviya'];

  addPerson(name: string) {
    this.persons.push(name);
  }
}
