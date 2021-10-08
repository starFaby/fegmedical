import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientbatacirComponent } from './clientbatacir.component';

describe('ClientbatacirComponent', () => {
  let component: ClientbatacirComponent;
  let fixture: ComponentFixture<ClientbatacirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientbatacirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientbatacirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
