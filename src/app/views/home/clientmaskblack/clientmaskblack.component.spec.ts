import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmaskblackComponent } from './clientmaskblack.component';

describe('ClientmaskblackComponent', () => {
  let component: ClientmaskblackComponent;
  let fixture: ComponentFixture<ClientmaskblackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmaskblackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmaskblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
