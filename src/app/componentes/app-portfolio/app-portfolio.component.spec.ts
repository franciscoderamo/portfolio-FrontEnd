import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPortfolioComponent } from './app-portfolio.component';

describe('AppPortfolioComponent', () => {
  let component: AppPortfolioComponent;
  let fixture: ComponentFixture<AppPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppPortfolioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
