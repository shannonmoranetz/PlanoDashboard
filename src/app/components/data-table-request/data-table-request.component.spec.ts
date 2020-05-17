import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableRequestComponent } from './data-table-request.component';

describe('DataTableRequestComponent', () => {
  let component: DataTableRequestComponent;
  let fixture: ComponentFixture<DataTableRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
