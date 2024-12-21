import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicOption1Page } from './music-option1.page';

describe('MusicOption1Page', () => {
  let component: MusicOption1Page;
  let fixture: ComponentFixture<MusicOption1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicOption1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
