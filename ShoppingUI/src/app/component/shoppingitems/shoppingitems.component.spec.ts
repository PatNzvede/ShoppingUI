import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingitemsComponent } from './shoppingitems.component';

describe('ShoppingitemsComponent', () => {
  let component: ShoppingitemsComponent;
  let fixture: ComponentFixture<ShoppingitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
