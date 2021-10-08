import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientgorroComponent } from './clientgorro.component';

describe('ClientgorroComponent', () => {
  let component: ClientgorroComponent;
  let fixture: ComponentFixture<ClientgorroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientgorroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientgorroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
