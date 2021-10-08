import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmaskblueComponent } from './clientmaskblue.component';

describe('ClientmaskblueComponent', () => {
  let component: ClientmaskblueComponent;
  let fixture: ComponentFixture<ClientmaskblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmaskblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmaskblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
