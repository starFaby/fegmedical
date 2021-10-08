import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientbatapacComponent } from './clientbatapac.component';

describe('ClientbatapacComponent', () => {
  let component: ClientbatapacComponent;
  let fixture: ComponentFixture<ClientbatapacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientbatapacComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientbatapacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
