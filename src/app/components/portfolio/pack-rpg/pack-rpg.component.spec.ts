import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackRPGComponent } from './pack-rpg.component';

describe('PackRPGComponent', () => {
  let component: PackRPGComponent;
  let fixture: ComponentFixture<PackRPGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackRPGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackRPGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
