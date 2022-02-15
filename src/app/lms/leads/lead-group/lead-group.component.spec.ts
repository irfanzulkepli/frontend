/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeadGroupComponent } from './lead-group.component';

describe('LeadGroupComponent', () => {
  let component: LeadGroupComponent;
  let fixture: ComponentFixture<LeadGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
