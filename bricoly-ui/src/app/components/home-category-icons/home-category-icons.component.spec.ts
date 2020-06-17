import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCategoryIconsComponent } from './home-category-icons.component';

describe('HomeCategoryIconsComponent', () => {
  let component: HomeCategoryIconsComponent;
  let fixture: ComponentFixture<HomeCategoryIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCategoryIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCategoryIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
