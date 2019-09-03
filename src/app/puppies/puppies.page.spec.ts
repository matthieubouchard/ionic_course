import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppiesPage } from './puppies.page';

describe('PuppiesPage', () => {
  let component: PuppiesPage;
  let fixture: ComponentFixture<PuppiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
