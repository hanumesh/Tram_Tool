import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowIdeasComponent } from './follow-ideas.component';

describe('FollowIdeasComponent', () => {
  let component: FollowIdeasComponent;
  let fixture: ComponentFixture<FollowIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
