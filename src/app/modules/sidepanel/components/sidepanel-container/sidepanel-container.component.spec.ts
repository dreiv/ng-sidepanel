import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidepanelContainerComponent } from './sidepanel-container.component';

describe('SidepanelContainerComponent', () => {
  let component: SidepanelContainerComponent;
  let fixture: ComponentFixture<SidepanelContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidepanelContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidepanelContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
