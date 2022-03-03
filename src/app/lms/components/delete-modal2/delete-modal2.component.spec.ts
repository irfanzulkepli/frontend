/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeleteModal2Component } from './delete-modal2.component';

describe('DeleteModal2Component', () => {
  let component: DeleteModal2Component;
  let fixture: ComponentFixture<DeleteModal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteModal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteModal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
