import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienternoenfComponent } from './clienternoenf.component';

describe('ClienternoenfComponent', () => {
  let component: ClienternoenfComponent;
  let fixture: ComponentFixture<ClienternoenfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienternoenfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienternoenfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
