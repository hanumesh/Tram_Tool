import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionPostsTrendsComponent } from './discussion-posts-trends.component';

describe('DiscussionPostsTrendsComponent', () => {
  let component: DiscussionPostsTrendsComponent;
  let fixture: ComponentFixture<DiscussionPostsTrendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionPostsTrendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionPostsTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
