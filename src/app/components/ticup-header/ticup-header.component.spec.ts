import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicupHeaderComponent } from './ticup-header.component';

describe('TicupHeaderComponent', () => {
  let component: TicupHeaderComponent;
  let fixture: ComponentFixture<TicupHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicupHeaderComponent]
    });
    fixture = TestBed.createComponent(TicupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
