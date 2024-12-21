import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicOption2Page } from './music-option2.page';

describe('MusicOption2Page', () => {
  let component: MusicOption2Page;
  let fixture: ComponentFixture<MusicOption2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicOption2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
