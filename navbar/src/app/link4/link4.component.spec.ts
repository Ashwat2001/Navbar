import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Link4Component } from './link4.component';

describe('Link4Component', () => {
  let component: Link4Component;
  let fixture: ComponentFixture<Link4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Link4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Link4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
