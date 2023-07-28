import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFakeComponent } from './data-fake.component';

describe('DataFakeComponent', () => {
  let component: DataFakeComponent;
  let fixture: ComponentFixture<DataFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataFakeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
