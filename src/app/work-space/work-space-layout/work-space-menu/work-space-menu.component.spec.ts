import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpaceMenuComponent } from './work-space-menu.component';

describe('WorkSpaceMenuComponent', () => {
  let component: WorkSpaceMenuComponent;
  let fixture: ComponentFixture<WorkSpaceMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSpaceMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkSpaceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
