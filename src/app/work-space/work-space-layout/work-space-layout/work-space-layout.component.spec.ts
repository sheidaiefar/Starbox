import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSpaceLayoutComponent } from './work-space-layout.component';

describe('WorkSpaceLayoutComponent', () => {
  let component: WorkSpaceLayoutComponent;
  let fixture: ComponentFixture<WorkSpaceLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkSpaceLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkSpaceLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
