import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeStarterComponent } from './recipe-starter.component';

describe('RecipeStarterComponent', () => {
  let component: RecipeStarterComponent;
  let fixture: ComponentFixture<RecipeStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
