import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableErrorComponent } from './data-table-error.component';

describe('DataTableErrorComponent', () => {
  let component: DataTableErrorComponent;
  let fixture: ComponentFixture<DataTableErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
