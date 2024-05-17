import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvebodyComponent } from './evebody.component';

describe('EvebodyComponent', () => {
  let component: EvebodyComponent;
  let fixture: ComponentFixture<EvebodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvebodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvebodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
