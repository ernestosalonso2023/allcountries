import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscountryComponent } from './detailscountry.component';

describe('DetailscountryComponent', () => {
  let component: DetailscountryComponent;
  let fixture: ComponentFixture<DetailscountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailscountryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailscountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
