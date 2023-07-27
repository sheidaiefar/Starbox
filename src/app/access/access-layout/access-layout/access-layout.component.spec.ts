import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessLayoutComponent } from './access-layout.component';

describe('AccessLayoutComponent', () => {
  let component: AccessLayoutComponent;
  let fixture: ComponentFixture<AccessLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
