import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartTemplateComponent } from './smart-template.component';

describe('SmartTemplateComponent', () => {
  let component: SmartTemplateComponent;
  let fixture: ComponentFixture<SmartTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
