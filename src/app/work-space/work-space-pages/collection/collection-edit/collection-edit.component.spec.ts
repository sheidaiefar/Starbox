import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionEditComponent } from './collection-edit.component';

describe('CollectionEditComponent', () => {
  let component: CollectionEditComponent;
  let fixture: ComponentFixture<CollectionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
