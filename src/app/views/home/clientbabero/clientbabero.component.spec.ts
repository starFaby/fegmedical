import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientbaberoComponent } from './clientbabero.component';

describe('ClientbaberoComponent', () => {
  let component: ClientbaberoComponent;
  let fixture: ComponentFixture<ClientbaberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientbaberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientbaberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
